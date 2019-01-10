import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Layout } from '../../components/commons'
import Popular from '../../components/feed/popular'

class PopularFeed extends PureComponent {
  state = {
    feedLimit: 1,
    popularFeed: []
  }

  a = () => {
    this.setState({
      feedLimit: this.state.feedLimit + 1
    })
  }

  render() {
    const { feedLimit, popularFeed } = this.state

    return (
      <Layout>
        <Query query={query} variables={{ limit: feedLimit }}>
          {({ loading, error, data }) => {
            if (loading) return 'eeiei'
            if (error) return `Error! ${error.message}`

            this.setState({
              popularFeed: data.feed.data
            })

            return null
          }}
        </Query>
        <Popular data={popularFeed} />
        <button onClick={this.a}>apollo</button>
      </Layout>
    )
  }
}

export default PopularFeed

const query = gql`
  query Feeds($limit: Int!) {
    feed(mode: v5_popular) {
      count
      data(limit: $limit) {
        ... on FeedItemArticle {
          article {
            id
            published_time
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
            blocks(mode: v4_featured) {
              count
              data {
                ... on BlockParagraph {
                  content
                }
                ... on BlockPhoto {
                  photo {
                    sizes(size: article_thumb) {
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
  }
`
