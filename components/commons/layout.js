import React from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

import '../../styles/components/commons/layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout mb-1">
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
    </div>
  )
}

export default Layout
