import React from 'react'
import Layout from '../../components/global/layout'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import InnerPageLayout from '../../components/inner-page-layout';
import { Accordion } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { Button, Input, Spacer, Textarea } from '@nextui-org/react';


function profile() {
  return (
    <Layout title={"Profilim"}>
      <InnerPageLayout title={"Profilim"} />
      <div className='container' style={{ margin: '5vh' }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Genel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Kulübüm</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Güvenlik</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div>
                    Username değişikliği <br />
                    Ad Soyad değişikliği <br />
                    email değişikliği <br />
                    Telefon numarası değişiklği <br />
                    Okul değişikliği <br />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <div className='d-flex flex-column justify-content-center'>
                      <h3 className='text-center'>Kulübüm</h3>
                      <hr />
                      <h4 className='text-center'>Etkinlik Ekle</h4>
                      <hr />
                      <div className='text-center'>
                        <Spacer y={1.5} />
                        <Input size='lg' labelPlaceholder="Etkinlik Adı" />
                        <Spacer y={1.5} />
                        <Textarea placeholder="Etkinlik Açıklaması" />
                        <Spacer y={1.7} />
                        <Input size='md' labelPlaceholder="Etkinlik Konumu" />
                        <Spacer y={1.7} />
                        <Input size='md' labelPlaceholder="Etkinlik Organizatörü" />
                        <Spacer y={1.7} />
                        <Input size='md' labelPlaceholder="Etkinlik Kategorisi" />
                        <Spacer y={1.7} />
                        <Input size='md' labelPlaceholder="Etkinlik Kapasitesi" />
                        <Spacer y={1.7} />
                        <Input size='md' labelPlaceholder="Etkinlik Resmi (URL)" />
                        <Spacer y={1} />
                        <Input
                          size="md"
                          width="186px"
                          label="Etkinlik Tarihi"
                          type="date"
                        />
                        <Spacer y={1} />
                        <Input
                          width="186px"
                          label="Etkinlik Saati"
                          type="time"
                        />
                        <Spacer y={1} />
                        <Button color="primary" onClick={() => { console.log("test") }}>Etkinlik Ekle</Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div>
                    Şifre değişikliği <br />
                    Hesabın silinmesi <br />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Layout>
  )
}

export default profile;