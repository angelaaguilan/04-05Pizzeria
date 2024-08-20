import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import pizzeriaHeader from '../assets/imgs/pizzeriaHeader.png';
import { pizzas } from "../pizzas.js";
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';


const Home = () => { 
   
  return (
    <>
      <Header
        urlImage={pizzeriaHeader}
        altImage="Pizzería Mamma Mia"
        title="¡Pizzería Mamma Mia!"
        description="Tenemos las mejores pizzas que podrás encontrar!"
      />

      <Container fluid>
        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;