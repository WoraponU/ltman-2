import React, { PureComponent } from 'react'
import { Button } from 'reactstrap'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Index extends PureComponent {
  render() {
    return (
      <div>
        <Button color="danger">Danger!</Button>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            console.log(data)
            return <div>eiei</div>
          }}
        </Query>
      </div>
    )
  }
}

export default Index

const query = gql`
  query {
    feed(mode: v5_popular) {
      count
      data {
        ... on FeedItemArticle {
          article {
            id
            page {
              profile {
                name
                photo {
                  sizes(size: profile_thumb) {
                    name
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
