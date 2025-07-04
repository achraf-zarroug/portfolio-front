import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import { Readable } from 'stream'

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://achraf-zarroug.vercel.app' })

  const links = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/projects', changefreq: 'monthly', priority: 0.8 },
    // Ajoutez vos autres routes ici
  ]

  const stream = Readable.from(links).pipe(sitemap)

  try {
    const data = await streamToPromise(stream)
    createWriteStream('./public/sitemap.xml').write(data.toString())
    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

generateSitemap()