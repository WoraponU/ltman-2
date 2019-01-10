import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Waypoint from 'react-waypoint'

import { Layout } from '../../components/commons'
import Popular from '../../components/feed/popular'

class PopularFeed extends Component {
  state = {
    feedLimit: 1,
    popularFeed: []
  }

  loadMore = () => {
    console.log(this.state.feedLimit)
    this.setState({
      feedLimit: this.state.feedLimit + 1
    })
  }

  loadMorea = () => {
    console.log('leave')
  }

  render() {
    const { feedLimit, popularFeed } = this.state

    return (
      <Layout>
        <Query query={query} variables={{ limit: feedLimit }}>
          {({ loading, error, data }) => {
            if (loading) return null
            if (error) return `Error! ${error.message}`

            console.log('eieiei')
            this.setState({
              popularFeed: data.feed.data
            })

            return null
          }}
        </Query>
        <Popular data={popularFeed} />
        {/* <Waypoint onEnter={this.loadMore} onLeave={this.loadMorea} /> */}
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
