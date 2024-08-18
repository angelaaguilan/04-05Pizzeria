// Simular un carrito de compras, renderizar en App.jsx y comentar componente <Home /> por ahora en App.jsx.

import CardPizza from "./CardPizza.jsx";
import { pizzas } from "../pizzas.js";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Cart = () => {

  return (
    <>
      
      <Row >
        <Col xs={6} md={4}>
          Carrito de Compras
          <Button>Pagar</Button>
        </Col>

        <Col xs={12} md={8}>
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Cart;
