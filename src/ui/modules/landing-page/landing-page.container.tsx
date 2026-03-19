import type { InstagramPost } from '@/lib/instagram'
import { LandingPageView } from './landing-page.view'

type Props = {
  posts: InstagramPost[]
}

export function LandingPageContainer({ posts }: Props) {
  return <LandingPageView posts={posts} />
}