import Head from 'next/head'

import { light } from '@/styles/theme'

interface SEOProps {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSufix?: boolean
  shouldIndexPage?: boolean
}

const SEO = ({
  title,
  description,
  image,
  shouldExcludeTitleSufix = false,
  shouldIndexPage = true
}: SEOProps): JSX.Element => {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSufix ? '| OCCAM Engenharia' : ''
  }`

  let pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}${image}` : null
  if (image?.match(/http/gi)) pageImage = image

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}

      {/* Caso seja shouldIndexPage=false ele não irá indexar  */}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <link rel="icon" href="/banner.png" />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content={light.colors.primary} />
      <meta name="msapplication-TileColor" content={light.colors.primary} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://metatags.io/" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@occamengenharia" />
      <meta name="twitter:creator" content="@occamengenharia" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  )
}

export default SEO
