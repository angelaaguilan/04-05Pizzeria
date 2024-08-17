import Card from 'react-bootstrap/Card';

const Header = ({ urlImage, altImage, title, description }) => {
  
  const styleLine = {width: '70%', margin: '2% 15% 0 15%', borderTop: '3px solid'}

  return (
    <>
      <Card className='bg-dark text-white text-center'>
        <Card.Img
          src={urlImage}
          alt={altImage}
        />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize: '60px'}}>{title}</Card.Title>
          <Card.Text className='mt-4 pb-3 h5'>{description}</Card.Text>
          <hr style={styleLine} />
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Header;
