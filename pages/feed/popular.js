import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Waypoint from 'react-waypoint'

import { Layout } from '../../components/commons'
import { PopularFeed } from '../../components/feed'

class PopularFeedPage extends PureComponent {
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

PopularFeedPage.fragments = {
  feedItemArticle: gql`
    fragment FeedItemArticleFragment on FeedItemArticle {
      article {
        id
        published_time
        page {
          profile {
            name
            photo {
              sizes(size: profile_thumb) {
                src
              }
            }
          }
        }
        blocks(mode: v4_featured) {
          count
          data {
            ... BlockParagraphFragment
            ... BlockPhotoFragment
          }
        }
      }
    }
  `,
  BlockParagraph: gql`
    fragment BlockParagraphFragment on BlockParagraph {
      content
    }
  `,
  BlockPhoto: gql`
    fragment BlockPhotoFragment on BlockPhoto {
      photo {
        sizes(size: article_thumb) {
          src
        }
      }
    }
  `,
};

const query = gql`
  query Feeds($limit: Int!) {
    feed(mode: v5_popular) {
      count
      data(limit: $limit) {
        ... FeedItemArticleFragment
      }
    }
  }
  ${PopularFeedPage.fragments.feedItemArticle}
  ${PopularFeedPage.fragments.BlockParagraph}
  ${PopularFeedPage.fragments.BlockPhoto}
`
