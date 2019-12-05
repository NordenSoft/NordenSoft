import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const detailsQuery = graphql`
  query SEOQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      author
      analytics
      ogImage {
        asset {
          url
        }
      }
    }
  }
`

const schemaOrgJSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NordenSoft Design & Software Development Labs ApS",
    "image": "https://cdn.sanity.io/images/wzscd3fa/production/8a0c9fe52230cf8ba72e040ac43774376e837d2f-250x56.webp",
    "@id": "",
    "url": "http://www.nordensoft.dk",
    "telephone": "+45 26 46 36 01",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Telemarksgade 11",
      "addressLocality": "København",
      "postalCode": "2300",
      "addressCountry": "DK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.6600713,
      "longitude": 12.601273699999979
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }, {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "16:00"
    }],
    "sameAs": [
      "https://www.facebook.com/nordensoft/",
      "https://www.instagram.com/nordensoft",
      "https://www.linkedin.com/in/toratoraman/"
    ]
  }
];

function SEO({ description, lang, meta, keywords = [], title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const metaDescription = description || data.site.description
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={title === data.site.title ? '%s' : `%s | ${data.site.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'google-site-verification',
                content: data.site.analytics
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: data.site.ogImage.asset.url
              },
              {
                property: 'og:url',
                content: 'https://www.nordensoft.dk'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: data.site.author
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          >
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'da-DK',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
