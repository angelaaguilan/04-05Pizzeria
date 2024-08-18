import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from "react-bootstrap";
import CardPizza from "./CardPizza.jsx";
import { pizzas } from "../pizzas.js";

const Paso = () => {

    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={6} md={4} className="d-flex flex-column">
              Carrito de Compras
              <Button>Pagar</Button>
            </Col>

            <Col
              xs={12}
              md={8}
              className="d-flex justify-content-between g-col-6 g-col-md-4"
            >
              {pizzas.map((pizza) => (
                <CardPizza key={pizza.id} pizza={pizza} />
              ))}
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col xs={2} className="d-flex flex-column">
              Carrito de Compras
              <Button>Pagar</Button>
            </Col>

            <Col
              sm={8}
              className="d-flex justify-content-between g-col-6 g-col-md-4"
            >
              {pizzas.map((pizza) => (
                <CardPizza key={pizza.id} pizza={pizza} />
              ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  
}

export default Paso;

