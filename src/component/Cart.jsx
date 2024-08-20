// Simular un carrito de compras, renderizar en App.jsx y comentar componente <Home /> por ahora en App.jsx.

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PizzaTrozo from '../assets/imgs/PizzaTrozo.png';
import carroCompra from '../assets/imgs/carroCompra.png';
import { pizzas } from "../pizzas.js";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useState } from 'react';


export const Cart = () => {

    const styleCard = {
      width: "25%",
      height: "auto",
      margin: "40px 10px 8px 20px",
  };
  
  const [cuenta, setCuenta] = useState(0);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Button variant="outline-info">Total: $</Button>
        </Row>

        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza, id) => (
            <Card style={styleCard} key={pizza.id}>
              <Card.Header style={{ height: "auto" }}>
                <Card.Img
                  variant="top"
                  src={pizza.img}
                  style={{ width: "100%" }}
                />
                <Card.Title className="mt-3">Pizza {pizza.name}</Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
              </Card.Header>

              <Card.Body className="text-center">
                <Card.Text className="h5 mb-2">
                  <Image src={PizzaTrozo} /> Ingredientes:
                </Card.Text>
                <Card.Text>{pizza.ingredients}</Card.Text>
              </Card.Body>

              <Card.Footer className="p-4 text-center">
                <Card.Text className="h4 mb-4">
                  Precio: ${Intl.NumberFormat("de-DE").format(pizza.price)}
                </Card.Text>

                <Card.Text key={pizza.id}>
                  <Button
                    onClick= () => setCuenta(cuenta - 1)}
                    variant="ou|tline-primary"
                  >
                    -
                  </Button>{" "}
                  {cuenta}{" "}
                  <Button
                    onClick={() => setCuenta(cuenta + 1)}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </Card.Text>
              </Card.Footer>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cart;
