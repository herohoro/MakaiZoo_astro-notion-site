import type { AstroIntegration } from 'astro'
import { getAllPosts, getAllSubPosts, downloadFile } from '../lib/notion/client'

export default (): AstroIntegration => ({
  name: 'featured-image-downloader',
  hooks: {
    'astro:build:start': async () => {
      const posts = await getAllPosts()
      const subPosts = await getAllSubPosts() // 2つ目のDBからのデータを取得

      const allPosts = [...posts, ...subPosts] // 全てのデータを一つの配列にまとめる

      await Promise.all(
        allPosts.map((post) => {
          if (!post.FeaturedImage || !post.FeaturedImage.Url) {
            return Promise.resolve()
          }

          let url!: URL
          try {
            url = new URL(post.FeaturedImage.Url)
          } catch (err) {
            console.log('Invalid FeaturedImage URL')
            return Promise.resolve()
          }

          return downloadFile(url)
        })
      )
    },
  },
})
