"use client";

import { useEffect, useMemo, useState } from "react";
import { getLatestResults } from "@/lib/results/get-results";
import type { ClubResultsResponse, MatchResult } from "@/lib/results/types";

function getResultBadge(match: MatchResult, clubName = "NEGATIV") {
  const clubIsHome = match.homeTeam.toUpperCase().includes(clubName.toUpperCase());
  const clubScore = clubIsHome ? match.homeScore : match.awayScore;
  const opponentScore = clubIsHome ? match.awayScore : match.homeScore;

  if (clubScore === null || opponentScore === null) return "—";
  if (clubScore > opponentScore) return "V";
  if (clubScore < opponentScore) return "D";
  return "N";
}

export function ResultsWidgetView() {
  const [data, setData] = useState<ClubResultsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const results = await getLatestResults();
        if (active) {
          setData(results);
        }
      } catch (error) {
        if (active) {
          setData({
            ok: false,
            error: "Impossible de charger les résultats",
          });
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  const matches = useMemo(() => data?.results ?? [], [data]);
  const latest = matches[0];

  if (loading) {
    return (
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Chargement des résultats…</p>
        </div>
      </section>
    );
  }

  if (!data?.ok || !matches.length) {
    return (
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">Résultats du club</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Aucun résultat disponible pour le moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4">
      <div className="mb-6">
        <h2 className="text-3xl font-black tracking-tight">Résultats FFBB</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Dernière synchronisation : {data.lastSyncAt}
        </p>
      </div>

      {latest && (
        <div className="mb-8 rounded-3xl bg-zinc-950 p-6 text-white shadow-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Dernier résultat
          </div>

          <div className="text-sm text-zinc-300">
            {latest.competition}
            {latest.round ? ` • ${latest.round}` : ""}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="text-lg font-bold md:text-2xl">{latest.homeTeam}</div>

            <div className="text-center text-3xl font-black md:text-5xl">
              {latest.homeScore ?? "-"} <span className="mx-2 text-zinc-500">/</span> {latest.awayScore ?? "-"}
            </div>

            <div className="text-lg font-bold md:text-2xl md:text-right">{latest.awayTeam}</div>
          </div>

          <div className="mt-4 text-sm text-zinc-300">
            {latest.dateLabel || "Date inconnue"}
            {latest.venue ? ` • ${latest.venue}` : ""}
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {matches.slice(0, 6).map((match) => (
          <article
            key={match.id}
            className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {match.round || "Match"}
              </span>

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-900">
                {getResultBadge(match)}
              </span>
            </div>

            <p className="text-sm text-zinc-500">{match.competition}</p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-zinc-900">{match.homeTeam}</span>
                <span className="font-black text-zinc-900">
                  {match.homeScore ?? "-"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-zinc-900">{match.awayTeam}</span>
                <span className="font-black text-zinc-900">
                  {match.awayScore ?? "-"}
                </span>
              </div>
            </div>

            <div className="mt-4 text-sm text-zinc-500">
              {match.dateLabel || "Date inconnue"}
            </div>

            {match.venue && (
              <div className="mt-1 text-sm text-zinc-500">{match.venue}</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}