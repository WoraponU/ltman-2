import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Waypoint from 'react-waypoint'

import { Layout } from '../../components/commons'
import { PopularFeed } from '../../components/feed'

class PopularFeedPage extends Component {
  state = {
    feedLimit: 5
  }

  onLoadMore = () => {
    this.setState({
      feedLimit: this.state.feedLimit + 5
    })
  }

  render() {
    const { feedLimit } = this.state

    return (
      <Layout>
        <Query query={query} variables={{ limit: feedLimit }}>
          {({ loading, error, data }) => {
            if (error) return `Error! ${error.message}`

            return (
              <PopularFeed
                onLoadMore={this.onLoadMore}
                loading={loading}
                data={data.feed.data}
              />
            )
          }}
        </Query>
        <Waypoint onEnter={this.onLoadMore} />
      </Layout>
    )
  }
}

export default PopularFeedPage

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
