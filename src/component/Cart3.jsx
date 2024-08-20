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
  // es total en el ejemplo
  const [total, setTotal] = useState(0);
  //  countProducts en el ejemplo, es un contador de productos
  const [cantidadPizzas, setCantidadPizzas] = useState(0);
  // Pizza es el Product en el ejemplo


  // onAddProduct en el ejemplo
  const agregaPizza = pizza => {

    // pizzaEnLista es item en el ejemplo
    // busca en la lista, el ID que se está agregando
      if (listaPizzas.find(pizzaEnLista => pizzaEnLista.id === pizza.id)) {
        // obtiene de la lista de pizzas 
        const pizzas = listaPizzas.map(pizzaEnLista => 
          pizzaEnLista.id === pizza.id ?
          // si lo encuentra, retorna los datos para ser cargados
           { ...pizzaEnLista, cantidad: pizzaEnLista.cantidad + 1 }
           : pizzaEnLista
        );
//        console.log(pizza.price);
       
      setTotal(total + pizza.price);   
       return setListaPizzas([...pizzas]);
     }

    
    // primera carga de las pizzas en la lista   
    setTotal(total + pizza.price);
    setListaPizzas([  
      ...listaPizzas,
      {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        cantidad: 1
      },
    ]);
  };



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
                      {listaPizzas.map((pizza) => (
                        <Form key={pizza.id}>
                          <Form.Text name="name">Pizza {pizza.name}</Form.Text>
                          <Form.Text name="price">
                            Precio: ${pizza.price}
                          </Form.Text>
                          <Button name="resta">-</Button>
                          <Form.Text name="cantidad">
                            {pizza.cantidad}
                          </Form.Text>
                          <Button
                            name="suma"
                            onClick={() => agregaPizza(pizza)}
                          >
                            +
                          </Button>
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