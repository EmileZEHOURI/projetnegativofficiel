export type MatchResult = {
  id: string
  competition: string
  round: string | null
  dateLabel: string | null
  homeTeam: string
  awayTeam: string
  homeScore: number | null
  awayScore: number | null
  venue: string | null
  status: 'played' | 'scheduled' | 'unknown'
  teamLabel: string | null
  sourceUrl: string
  updatedAt: string
}

export type ClubResultsDocument = {
  clubId: string
  clubName: string
  source: 'ffbb'
  sourceUrl: string
  lastSyncAt: string
  results: MatchResult[]
}