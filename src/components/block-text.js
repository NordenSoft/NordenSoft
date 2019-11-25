import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'


const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        default:
          return <p>{props.children}</p>
      }
    }
  }
}

const BlockText = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockText
