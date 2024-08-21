import React, { useState } from 'react';
import { pizzas } from "../pizzas.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const Cart3 = () => {
  //  genera la lista de pizzas en el carrito
  const [listaPizzas, setListaPizzas] = useState([]);
  // es Total de la lista de pizzas a pagar
  const [total, setTotal] = useState(0);
  //  Cantidad de pizzas en el carrito, por cada una de las seleccionadas
  const [cantidadPizzas, setCantidadPizzas] = useState(0);
  

  
  // Agrega, suma o resta las pizzas a la lista
  const agregaPizza = (pizza, operacion) => {
    
    if (operacion === "agregar") {
      const found = listaPizzas.findIndex(Lista => Lista.id === pizza.id)
  
      if (found<0) {
      // primera carga de cada pizza seleccionada a la lista y total
      setTotal(total + pizza.price);
      setListaPizzas([
        ...listaPizzas,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          cantidad: 1,
        },
      ]);
      } else {
        alert("La pizza ya se encuentra en el carrito de compras")
      }

    } else if (operacion === "sumar") {
          
      // busca en la lista, el ID que se está agregando
      const pizzas = listaPizzas.map(pizzaEnLista => pizzaEnLista.id === pizza.id ?
        // si lo encuentra, aumenta la cantidad de la pizza en 1
        { ...pizzaEnLista, cantidad: pizzaEnLista.cantidad + 1 }
        : pizzaEnLista
      );

      // Al Total le suma la pizza seleccionada 
      setTotal(total + pizza.price);
      return setListaPizzas([...pizzas]);

    } else if (operacion === "restar") {

      // Copia de la lista para trabajar en ella y luego actualizar
      const nuevasPizzas = [...listaPizzas];

      // Busca indice de la pizza para restar la cantidad
      const index = nuevasPizzas.findIndex(el => el.id === pizza.id);
      nuevasPizzas[index].cantidad = pizza.cantidad - 1;
      console.log("listado original")
      console.log(nuevasPizzas);

      // Actualizar cantidad en el carrito de compra
      setListaPizzas(nuevasPizzas);
      console.log("listado actualizado");
      console.log(listaPizzas);
      
      // Actualizar Total a Pagar según Pizza eliminada
      setTotal(total - pizza.price);

      // Eliminar Pizza con cantidad = 0
      console.log("cantidad de pizzas")
      console.log(nuevasPizzas[index].cantidad);
      if (nuevasPizzas[index].cantidad === 0) {
        const listaActualizada = listaPizzas.filter(
          pizzaNull => pizzaNull.id !== pizza.id);
        console.log("lista sin cantidades = 0")
        console.log(listaActualizada)
        setListaPizzas(listaActualizada);

      }
    }
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
                        {listaPizzas.map(pizza => (
                          <Form key={pizza.id}>
                            <Form.Text name="name">Pizza {pizza.name}</Form.Text>
                            <Form.Text name="price">
                              Precio: ${pizza.price}
                            </Form.Text>
                            <Button
                              onClick={() => agregaPizza(pizza, "restar")}
                            >-</Button>
                            <Form.Text name="cantidad">
                              {pizza.cantidad}
                            </Form.Text>
                            <Button
                              onClick={() => agregaPizza(pizza, "sumar")}
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
                {pizzas.map(pizza => (
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
                      onClick={() => agregaPizza(pizza, "agregar")}
                    >Agregar</Button>
                  </Form>
                ))}
              </div>
            </Col>
          
          </Row>
        </Container>
      </>
    )

  };

export default Cart3;