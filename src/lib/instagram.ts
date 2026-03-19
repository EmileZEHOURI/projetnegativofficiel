export type InstagramMediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'

export type InstagramPost = {
  id: string
  caption: string
  mediaType: InstagramMediaType
  permalink: string
  timestamp: string
  username?: string
  previewUrl: string
}