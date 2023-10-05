import React from 'react'
import './itemListContainer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../../assets/collarConFlores.jpg'
import image2 from '../../assets/rascador-para-gatos.jpg'
import image3 from '../../assets/transportinParaGato.jpg'

function ItemListContainer({greeting}) {
  return (
    <>
    <h2 className='greeting'>{greeting}</h2>
    <div className='cardContainer'>
    <Card className="cardOne" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Titulo de prueba</Card.Title>
        <Card.Text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, autem? Dolores repudiandae necessitatibus doloremque quo. Tempore quibusdam culpa nam. Quasi unde quisquam id facere officiis mollitia tempora perferendis ea minus!</p>
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    <Card className="cardTwo" style={{ width: '18rem' }}>
      <Card.Img className="cardImg" variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Titulo de prueba</Card.Title>
        <Card.Text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptas libero praesentium laboriosam molestias accusamus mollitia saepe in vel minima odit explicabo at voluptatibus, facilis nesciunt molestiae. Tempora, maxime voluptatum.</p>
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    <Card className="cardThree" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Titulo de prueba</Card.Title>
        <Card.Text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, autem? Dolores repudiandae necessitatibus doloremque quo. Tempore quibusdam culpa nam. Quasi unde quisquam id facere officiis mollitia tempora perferendis ea minus!</p>
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default ItemListContainer