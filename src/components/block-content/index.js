import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'
// import Slideshow from './slideshow'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="title">{props.children}</h1>

        case 'h2':
          return <h2 className="title">{props.children}</h2>

        case 'h3':
          return <h3 className="title">{props.children}</h3>

        case 'h4':
          return <h4 className="title">{props.children}</h4>

        case 'blockquote':
          return <blockquote className="p">{props.children}</blockquote>

        default:
          return <p className="p">{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    // slideshow (props) {
    //   return <Slideshow {...props.node} />
    // }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
