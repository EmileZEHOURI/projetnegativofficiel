import type { ClubResultsResponse } from './types'

const RESULTS_API_URL =
  process.env.NEXT_PUBLIC_RESULTS_API_URL || '/api/results'

export async function getLatestResults(): Promise<ClubResultsResponse> {
  const response = await fetch(RESULTS_API_URL)

  if (!response.ok) {
    return {
      ok: false,
      error: `Erreur HTTP ${response.status}`,
    }
  }

  return response.json()
}