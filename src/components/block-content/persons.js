import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockContent from '../block-content'

function Persons(props) {

  const data = useStaticQuery(
    graphql`
    query personsQuery {
      person: allSanityPerson {
        nodes {
          name
          _id
          _rawImage
          _rawBio
        }
      }
    }
  `
  );

  const person = data.person.nodes


  return (
    <div className="figure-block">
      {/* <code>
        {JSON.stringify(person)}
      </code> */}
      {props.members.map(p => {
        for (var i = 0; i < person.length; i++) {
          if (person[i]._id === p.person._ref) {
            return (
              <figure className='my-2'>
                <img
                  src={imageUrlFor(buildImageObj(person[i]._rawImage))
                    .width(200)
                    .url()}
                  alt={person[i].name}
                />
                <figcaption>{person[i].name}</figcaption>
                <BlockContent blocks={person[i]._rawBio || []} />
              </figure>
            );
          }
        }
        return null;
      })}
    </div>
  )
}

export default Persons
