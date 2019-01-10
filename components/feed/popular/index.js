import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../../../styles/components/feed/popular/index.scss'

const Block = () => {
  return (
    <Row className="mt-3 pt-3 border rounded feed-item">
      <Col>
        <Row>
          <Col className="profile d-flex flex-row align-items-center">
            <img
              src="https://t0.blockdit.com/photos/2018/09/5ba4a3f599599c0b2f75ae19_profile_thumb.jpg"
              className="photo"
            />
            <div className="ml-2 flex-grow-1">
              <div>ลงทุนแมน</div>
              <div className="text-muted small">9 มกราคม เวลา 16:20 น.</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <div className="block-paragraph-wrapper">
              วิกฤติ มหาวิทยาลัยไทย / โดย ลงทุนแมน
            </div>
            <div className="block-paragraph-wrapper">
              “3 ใน 4 ของมหาวิทยาลัยของไทยในปัจจุบันอาจต้องปิดตัวลง ในช่วง 10 ปีข้างหน้า”
            </div>
            <div className="block-paragraph-wrapper">
              ในช่วง 2 - 3 ปีที่ผ่านมา
              มหาวิทยาลัยของไทยบางแห่งต้องมีการปรับหลักสูตรการเรียนการสอน
              บางสาขาวิชาต้องถูกปิดเพราะคนมาเรียนน้อย
              มหาวิทยาลัยเอกชนบางแห่งต้องขายกิจการให้ผู้ร่วมทุนต่างชาติ
              บางกรณีถึงขนาดมีการเลิกจ้างอาจารย์ในมหาวิทยาลัย.
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const Popular = ({ data }) => {
  return (
    <Container className="popular-feed">
      <Row>
        <Col sm="12" className="text-center pt-3 text-muted">
          <span className="lead">POPULAR</span>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <Block />
          <Block />
        </Col>
      </Row>
    </Container>
  )
}

export default Popular
