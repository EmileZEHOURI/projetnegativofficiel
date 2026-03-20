import { onSchedule } from 'firebase-functions/v2/scheduler'
import { logger } from 'firebase-functions'
import { db } from './firestore'
import { COLLECTION_NAME, DOCUMENT_ID, FFBB_CLUB_ID, FFBB_CLUB_NAME, FFBB_CLUB_URL } from './constants'
import { parseFfbbClubPage } from './parseFfbbClubPage'
import type { ClubResultsDocument } from './types'

export const syncFfbbResults = onSchedule(
  {
    schedule: 'every 10 minutes',
    timeZone: 'Europe/Paris',
    region: 'europe-west1',
  },
  async () => {
    logger.info('Starting FFBB sync', { url: FFBB_CLUB_URL })

    const response = await fetch(FFBB_CLUB_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NegativBasketbot/1.0)',
      },
    })

    if (!response.ok) {
      throw new Error(`FFBB fetch failed: ${response.status}`)
    }

    const html = await response.text()
    const results = parseFfbbClubPage(html)

    const doc: ClubResultsDocument = {
      clubId: FFBB_CLUB_ID,
      clubName: FFBB_CLUB_NAME,
      source: 'ffbb',
      sourceUrl: FFBB_CLUB_URL,
      lastSyncAt: new Date().toISOString(),
      results,
    }

    await db.collection(COLLECTION_NAME).doc(DOCUMENT_ID).set(doc, { merge: true })

    logger.info('FFBB sync completed', {
      resultsCount: results.length,
      document: `${COLLECTION_NAME}/${DOCUMENT_ID}`,
    })
  }
)