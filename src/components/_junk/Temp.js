// sample to be DELETED

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

class CoolThing extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.site.siteMetadata.title}

        {/* conditionally render directories */}
        {this.props.directories.edges && (
          <ul>
            {this.props.directories.edges.map((directory) => {
              return <li key={directory.node.id}>{directory.node.name}</li>
            })}
          </ul>
        )}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allDirectory {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <CoolThing site={data.site} directories={data.allDirectory} />
    )}
  />
)