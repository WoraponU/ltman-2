import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'

import '../../styles/components/commons/layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Row className="sticky-top header">
        <Col className="text-center">
          <Link href="https://www.blockdit.com">
            <a className="mx-auto">
              <img src="https://s0.blockdit.com/static/blockdit-inline.png" />
            </a>
          </Link>
        </Col>
      </Row>
      {children}
    </>
  )
}

export default Layout
