import type { InstagramPost } from '@/lib/instagram'
import InstagramCarousel from '@/ui/components/instagram-carousel/InstagramCarousel'

type Props = {
  posts: InstagramPost[]
}

export default function SocialNetworkView({ posts }: Props) {
  return <InstagramCarousel posts={posts} />
}