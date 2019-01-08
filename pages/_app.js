import React from 'react'
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { compose } from 'recompose'
import { ApolloProvider } from 'react-apollo'

import { withApolloClient } from '../libs/apollo'
import makeStore from '../store'

import 'bootstrap/scss/bootstrap.scss'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

const enhance = compose(
  withApolloClient,
  withRedux(makeStore)
)

export default enhance(MyApp)
