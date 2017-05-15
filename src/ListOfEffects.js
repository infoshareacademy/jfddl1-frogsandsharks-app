import React from 'react';

import {
  Grid,
  Col,
  Row,
  Nav,
  Navbar,
  NavItem,
  Panel,
  ListGroup,
  Accordion
} from 'react-bootstrap'


class ListOfEffects extends React.Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8} lg={6}>
            <div>blablabla</div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Panel collapsible defaultExpanded header="Dieta">
              <ListGroup fill>
                <Accordion>
                  <Panel header="Owoce i Warzywa" eventKey="1">
                    Anim pariatu
                  </Panel>
                  <Panel header="Mięso, ryby, garmaż" eventKey="2">
                    Anim pariatur
                  </Panel>
                  <Panel header="Nabiał i jaja" eventKey="4">
                    Anim pariatur
                  </Panel>
                  <Panel header="Pieczywo" eventKey="5">
                    Anim pariatur
                  </Panel>
                  <Panel header="Produkty sypkie i makarony" eventKey="6">
                    Anim pariatur
                  </Panel>
                  <Panel header="Sosy, oleje, ocet" eventKey="7">
                    Anim pariatur
                  </Panel>
                  <Panel header="Przetwory" eventKey="8">
                    Anim pariatur
                  </Panel>
                  <Panel header="Słodycze" eventKey="9">
                    Anim pariatur
                  </Panel>
                  <Panel header="Przyprawy" eventKey="10">
                    Anim pariatur
                  </Panel>
                  <Panel header="Zdrowa Żywność" eventKey="11">
                    Anim pariatur
                  </Panel>
                  <Panel header="Kawa, herbata, napoje" eventKey="12">
                    Anim pariatur
                  </Panel>
                </Accordion>
              </ListGroup>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )

  }
}



export default ListOfEffects