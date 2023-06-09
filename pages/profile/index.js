import React from 'react'
import Layout from '../../components/global/layout'
import ClubSettings from '../../components/profileSettings/clubSettings'
import UserSettings from '../../components/profileSettings/generalSettings'
import SecuritySettings from '../../components/profileSettings/securitySettings'
import MyEventSettings from '../../components/profileSettings/myEventSettings'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import InnerPageLayout from '../../components/inner-page-layout';
import EventSettings from '../../components/profileSettings/eventSettings'
import { useUser } from '../../libs/auth/useAuth'

function profile() {

  const { user } = useUser();

  const isAdmin = user && user.role.includes('admin');

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
                {(isAdmin) &&
                  <Nav.Item>
                    <Nav.Link eventKey="second">Kulübüm</Nav.Link>
                  </Nav.Item>}
                  {(isAdmin) &&  
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Etkinliklerim</Nav.Link>
                </Nav.Item>}
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Katılacağım Etkinlikler</Nav.Link>
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
                    <UserSettings />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <ClubSettings />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div>
                    <SecuritySettings />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div>
                    <EventSettings />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div>
                    <MyEventSettings />
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