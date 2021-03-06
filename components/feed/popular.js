import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import moment from 'moment-timezone'

import '../../styles/components/feed/popular.scss'

moment.locale('th')

export default ({ data, loading }) => {
  return (
    <Container className="popular-feed">
      <Row>
        <Col sm="12" className="text-center pt-3 text-muted">
          <span className="lead">POPULAR</span>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          {data.map(blockData => (
            <Block key={blockData.article.id} blockData={blockData} />
          ))}
        </Col>

        {loading ? (
          <Col className="text-center" lg={{ size: 6, offset: 3 }}>
            loading...
          </Col>
        ) : null}
      </Row>
    </Container>
  )
}

const Block = ({
  blockData: {
    article: {
      page,
      published_time,
      blocks: { data: contents }
    }
  }
}) => {
  return (
    <Row className="mt-3 pt-3 border rounded feed-item">
      <Col>
        <Row>
          <Col className="profile d-flex flex-row align-items-center">
            <img src={page.profile.photo.sizes[0].src} className="photo" />
            <div className="ml-2 flex-grow-1">
              <div>{page.profile.name}</div>
              <div className="text-muted small">
                {moment().isSame(published_time, 'day')
                  ? moment(published_time)
                      .tz('Asia/Bangkok')
                      .fromNow()
                  : moment(published_time)
                      .tz('Asia/Bangkok')
                      .format('D MMMM เวลา HH:mm น.')}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            {contents
              .filter(dataContent => dataContent.content)
              .map((dataContent, index) => (
                <div key={index} className="block-paragraph-wrapper">
                  {dataContent.content}
                </div>
              ))}
          </Col>
        </Row>
        <Row className="mt-1">
          <Col className="block-img">
            {contents
              .filter(dataContent => dataContent.photo)
              .map((dataContent, index) => (
                <img
                  key={index}
                  src={dataContent.photo.sizes[0].src}
                  className="img-fluid"
                />
              ))}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
