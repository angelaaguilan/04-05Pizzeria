import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PizzaTrozo from '../assets/imgs/PizzaTrozo.png';
import carroCompra from '../assets/imgs/carroCompra.png';
import eyes from '../assets/imgs/eyes.png';

export const CardPizza = ({ pizza }) => {
  const styleCard = { width: "25%", height: "auto", margin: "40px 10px 8px 20px" };
  const precio = Intl.NumberFormat("de-DE").format(pizza.price);
  
  const ingredientes = pizza.ingredients
  
  return (
    <>

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
                <Card.Text>
                  <ul>
                    {ingredientes.map((ingrediente, index) => (
                      <li key={index}> {ingrediente} </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="p-4 text-center">
                <Card.Text className="h4 mb-4"> Precio: ${precio}</Card.Text>
                <Button variant="outline-dark" className="mx-3">
                  Ver más <Image src={eyes} />
                </Button>
                <Button variant="dark" className="mx-3">
                  Añadir <Image src={carroCompra} />
                </Button>
              </Card.Footer>
            </Card>
          
        
 
    </>
  );
};

export default CardPizza;
