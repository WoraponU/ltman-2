import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Layout } from '../../components/commons'
import Popular from '../../components/feed/popular'

class Index extends PureComponent {
  render() {
    return (
      <Layout>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return <Popular data={data} />
          }}
        </Query>
      </Layout>
    )
  }
}

export default Index

const query = gql`
  {
    feed(mode: v5_popular) {
      count
      data {
        ... on FeedItemArticle {
          article {
            blocks(mode: v4_featured) {
              count
              data {
                ... on BlockParagraph {
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`
