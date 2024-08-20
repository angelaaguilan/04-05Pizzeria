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
  const agregaPizza = (id, name, price) => {
    // pizzaEnLista es item en el ejemplo
    if (listaPizzas.find((pizzaEnLista) => pizzaEnLista.id === id)) {
      const producto = listaPizzas.map(pizzaEnLista => pizzaEnLista.id === id ? { ...pizzaEnLista, cantidad: pizzaEnLista.cantidad + 1 } :
        pizzaEnLista
      ); 
      return setListaPizzas([...producto]);
    };

    setListaPizzas([
      ...listaPizzas,
      { id: id, name: name, price: price, cantidad: 1 },
    ]);
  };
  console.log(listaPizzas);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="d-flex flex-column">
            {/* LISTADO DE PIZZAS A PAGAR */}
            <div>
              Total a pagar: {total}
              <form>
                <ul>
                  {listaPizzas.length ? (
                    <>
                      {listaPizzas.map((producto) => (
                        <Form key={producto.id}>
                          <Form.Text name="name">
                            Pizza {producto.name}
                          </Form.Text>
                          <Form.Text name="price">
                            Precio: ${producto.price}
                          </Form.Text>
                          <Button name="resta">-</Button>
                          <Form.Text name="cantidad">
                            {producto.cantidad}
                          </Form.Text>
                          <Button name="suma">+</Button>
                        </Form>
                      ))}
                    </>
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
                  <Button
                    onClick={() =>
                      agregaPizza(pizza.id, pizza.name, pizza.price)
                    }
                    name="agregar"
                  >
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