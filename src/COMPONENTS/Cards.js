import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CSS/Cards.css'

const Cards = () => {
  return (
    <>

    <div className='card-div' style={{}}>


      <Card  id='card-child' >
            <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/close-female-hand-holds-levitating-260nw-1782418211.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card id='card-child'>
            <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/close-female-hand-holds-levitating-260nw-1782418211.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card  id='card-child'>
            <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/close-female-hand-holds-levitating-260nw-1782418211.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>


    </div>

      
    </>
  )
}

export default Cards
