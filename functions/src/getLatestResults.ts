import { onRequest } from 'firebase-functions/v2/https'
import { db } from './firestore'
import { COLLECTION_NAME, DOCUMENT_ID } from './constants'

export const getLatestResults = onRequest(
  {
    region: 'europe-west1',
    cors: true,
  },
  async (req, res) => {
    try {
      const snapshot = await db.collection(COLLECTION_NAME).doc(DOCUMENT_ID).get()

      if (!snapshot.exists) {
        res.status(404).json({
          ok: false,
          error: 'Aucun résultat synchronisé pour le moment',
        })
        return
      }

      res.set('Cache-Control', 'public, max-age=120, s-maxage=120')
      res.status(200).json({
        ok: true,
        ...snapshot.data(),
      })
    } catch (error) {
      console.error('[GET_LATEST_RESULTS_ERROR]', error)
      res.status(500).json({
        ok: false,
        error: 'Impossible de récupérer les résultats',
      })
    }
  }
)