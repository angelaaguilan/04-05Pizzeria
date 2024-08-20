import React, { useState } from 'react';
import { pizzas } from "../pizzas.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const Cart3 = () => {
  //  allproducts en el ejemplo, son los que se añaden al carrito
  const [listaPizzas, setListaPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  //  countProducts en el ejemplo, son los que se añaden al carrito
  const [cantidadPizzas, setCantidadPizzas] = useState(0);

  const [carroVacio, setcarroVacio] = useState(false);


  // onAddProduct en el ejemplo
  const agregaPizza = (pizza) => {
    setListaPizzas([...listaPizzas, pizza]);
  };
  console.log(listaPizzas);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="d-flex flex-column">
            {/* LISTADO DE PIZZAS A PAGAR */}
            <div>
              Pizzas a pagar
              <form>
                <ul>
                  {listaPizzas.length ? (

                    <Form.Text> Carro no vacío </Form.Text>
                  ) : (
                    <Form.Text> Carro vacío </Form.Text>
                  )}
                </ul>
              </form>
            </div>
          </Col>

          {/* LISTADO DE PIZZAS A SELECCIONAR PARA PAGAR */}
          <Col
            xs={12}
            md={10}
            className="d-flex justify-content-baseline flex-wrap my-5"
          >
            <div>
              {/* Renderizar una pizza por tarjeta */}
              {pizzas.map((pizza) => (
                <Form
                  className="d-flex justify-content-baseline flex-wrap my-5"
                  key={pizza.id}
                >
                  <Image
                    src={pizza.img}
                    alt={pizza.name}
                    style={{ width: "10%" }}
                  />
                  <Form.Text name="name">Pizza {pizza.name}</Form.Text>
                  <Form.Text name="price">Precio: ${pizza.price}</Form.Text>
                  <Button onClick={() => agregaPizza(pizza)} name="agregar">
                    Agregar
                  </Button>
                </Form>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart3;