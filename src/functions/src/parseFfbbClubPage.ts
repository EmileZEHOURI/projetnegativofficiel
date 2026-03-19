import * as cheerio from 'cheerio'
import type { MatchResult } from './types'
import { FFBB_CLUB_URL } from './constants'

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim()
}

function parseScorePair(raw: string): { homeScore: number | null; awayScore: number | null } {
  const cleaned = normalizeText(raw)
  const match = cleaned.match(/^(-?\d+|-)\s+(-?\d+|-)$/)

  if (!match) {
    return { homeScore: null, awayScore: null }
  }

  const left = match[1] === '-' ? null : Number(match[1])
  const right = match[2] === '-' ? null : Number(match[2])

  return { homeScore: left, awayScore: right }
}

function buildId(parts: Array<string | null | undefined>) {
  return parts
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function inferStatus(homeScore: number | null, awayScore: number | null): MatchResult['status'] {
  if (homeScore !== null || awayScore !== null) return 'played'
  return 'unknown'
}

/**
 * Parseur volontairement souple :
 * - récupère le texte global
 * - isole la section "Derniers résultats des équipes"
 * - découpe les blocs par compétition / journée / date / équipes / score / salle
 *
 * À ajuster si FFBB modifie sa structure HTML.
 */
export function parseFfbbClubPage(html: string): MatchResult[] {
  const $ = cheerio.load(html)
  const pageText = normalizeText($('body').text())

  const startMarker = 'Derniers résultats des équipes'
  const endMarker = 'Derniers Matchs'

  const startIndex = pageText.indexOf(startMarker)
  const endIndex = pageText.indexOf(endMarker)

  if (startIndex === -1) {
    throw new Error('Section "Derniers résultats des équipes" introuvable')
  }

  const relevantText =
    endIndex > startIndex
      ? pageText.slice(startIndex + startMarker.length, endIndex)
      : pageText.slice(startIndex + startMarker.length)

  const blocks = relevantText
    .split(/(?=Départementale|Régionale|Nationale|Coupe|Trophée|Championnat)/i)
    .map((block) => normalizeText(block))
    .filter(Boolean)

  const updatedAt = new Date().toISOString()

  return blocks.flatMap((block) => {
    const lines = block
      .split(/(?=Poule\s+[A-Z]|Journée\s+\d+|\d{1,2}\s+\w+\.*\s+\d{1,2}h\d{2})/i)
      .map((line) => normalizeText(line))
      .filter(Boolean)

    if (lines.length < 4) return []

    const competition = lines[0] || 'Compétition inconnue'

    // On essaye ensuite d’extraire les éléments utiles à partir du texte.
    // Cette version est pragmatique, pas parfaite.
    const roundMatch = block.match(/(Poule\s+[A-Z]\s*\|\s*Journée\s+\d+)/i)
    const dateMatch = block.match(
      /(\d{1,2}\s+\w+\.?\s+\d{1,2}h\d{2})/i
    )

    const scoreMatch = block.match(/(?:^|\s)(-?\d+|-)\s+(-?\d+|-)(?:\s|$)/)
    const { homeScore, awayScore } = parseScorePair(scoreMatch ? `${scoreMatch[1]} ${scoreMatch[2]}` : '')

    // On récupère les lignes non triviales pour repérer équipes et salle.
    const rawParts = block
      .split(/(?=Poule\s+[A-Z]|Journée\s+\d+|\d{1,2}\s+\w+\.?\s+\d{1,2}h\d{2}|(?:^|\s)(-?\d+|-)\s+(-?\d+|-))/i)
      .map((part) => normalizeText(part))
      .filter(Boolean)

    const candidateLines = rawParts.filter(
      (part) =>
        part !== competition &&
        part !== roundMatch?.[1] &&
        part !== dateMatch?.[1] &&
        !/^(-?\d+|-)\s+(-?\d+|-)$/.test(part)
    )

    const homeTeam = candidateLines[0] || 'Équipe domicile inconnue'
    const awayTeam = candidateLines[1] || 'Équipe extérieure inconnue'
    const venue = candidateLines[2] || null

    const id = buildId([
      competition,
      roundMatch?.[1],
      dateMatch?.[1],
      homeTeam,
      awayTeam,
    ])

    const result: MatchResult = {
      id,
      competition,
      round: roundMatch?.[1] || null,
      dateLabel: dateMatch?.[1] || null,
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      venue,
      status: inferStatus(homeScore, awayScore),
      teamLabel: null,
      sourceUrl: FFBB_CLUB_URL,
      updatedAt,
    }

    return [result]
  })
}