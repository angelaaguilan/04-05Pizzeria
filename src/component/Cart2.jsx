// Simular un carrito de compras, renderizar en App.jsx y comentar componente <Home /> por ahora en App.jsx.

import { pizzas } from "../pizzas.js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import carroCompra from "../assets/imgs/carroCompra.png";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";


const Cart2 = () => {

      const styleCard = {
        width: "20%",
        height: "auto",
        margin: "40px 10px 8px 20px",
  };

  const [listaCompra, SetListaComprar] = useState([]);
  const [totalPagar, SetTotalPagar] = useState(0);



  return (

    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="d-flex flex-column">
            <Form>
              <Form.Group className="d-flex align-items-center">
                <Button variant="outline-light" className="text-primary">
                  Total: ${totalPagar}
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "50%" }}
                >
                  Pagar
                </Button>
              </Form.Group>
              <Form.Label>
                <h5>Carrito de Compras</h5>
              </Form.Label>
              {/* https://react-bootstrap.netlify.app/docs/components/list-group/#link1  */}
              <Form.Text className="mb-3" controlId="text">
                <ListGroup as="ol" numbered>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                    <Button>-</Button>
                    <Button>+</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Form.Text>
            </Form>
          </Col>

          {/* Pizzas a seleccionar */}
          <Col
            xs={12}
            md={10}
            className="d-flex justify-content-baseline flex-wrap"
          >
            {pizzas.map((pizza) => (
              <Card style={styleCard} key={pizza.id}>
                <Card.Header style={{ height: "auto" }}>
                  <Card.Img
                    variant="top"
                    src={pizza.img}
                    style={{ width: "100%" }}
                  />
                  <Card.Title className="mt-3">Pizza {pizza.name}</Card.Title>
                </Card.Header>

                <form action="">
                  <Card.Footer className="p-4 text-center">
                    <Card.Text className="h4 mb-4">
                      Precio: ${Intl.NumberFormat("de-DE").format(pizza.price)}
                    </Card.Text>

                    <Button className="mx-3" type="submit" onClick={AgregarPizza(pizza.id, pizza.price, pizza.name)}> 
                      <Card.Img
                        variant="top"
                        src={carroCompra}
                        style={{ width: "20%" }}
                      />{" "}
                      Añadir
                    </Button>
                  </Card.Footer>
                </form>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Cart2;
