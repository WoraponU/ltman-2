import React from 'react'
import App, { Container } from 'next/app'
import { compose } from 'recompose'
import { ApolloProvider } from 'react-apollo'

import { withApolloClient } from '../libs/apollo'

import 'bootstrap/scss/bootstrap.scss'
import '../styles/commons/app.scss'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

const enhance = compose(withApolloClient)

export default enhance(MyApp)
