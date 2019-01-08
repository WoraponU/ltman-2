import React from 'react'
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { compose } from 'recompose'

import makeStore from '../store'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

const enhance = compose(withRedux(makeStore))

export default enhance(MyApp)
