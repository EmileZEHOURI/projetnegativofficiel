import type { InstagramPost } from '@/lib/instagram'
import { useRef } from 'react'

type Props = {
  posts: InstagramPost[]
  title?: string
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export default function InstagramCarousel({
  posts,
  title = 'Derniers posts Instagram',
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    const container = trackRef.current
    if (!container) return

    const firstCard = container.querySelector<HTMLElement>('[data-card]')
    if (!firstCard) return

    const gap = 24
    const amount = firstCard.offsetWidth + gap

    container.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  if (!posts.length) {
    return (
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Aucun post Instagram disponible pour le moment.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Les dernières actus du club directement depuis Instagram
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard('left')}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-zinc-50"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard('right')}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-zinc-50"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              data-card
              className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md sm:w-[48%] lg:w-[32%]"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-100">
                  <img
                    src={post.previewUrl}
                    alt={post.caption || 'Post Instagram'}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                    {post.mediaType === 'IMAGE' && 'Photo'}
                    {post.mediaType === 'VIDEO' && 'Vidéo'}
                    {post.mediaType === 'CAROUSEL_ALBUM' && 'Album'}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {formatDate(post.timestamp)}
                  </div>

                  <p className="line-clamp-4 text-sm leading-6 text-zinc-700">
                    {post.caption || 'Voir le post sur Instagram'}
                  </p>

                  <div className="mt-4 text-sm font-semibold text-zinc-900">
                    Voir sur Instagram →
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}