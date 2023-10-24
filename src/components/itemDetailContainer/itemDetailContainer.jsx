import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './itemDetailContainer.css'
import Card from 'react-bootstrap/Card';

function ItemDetailContainer() {

  const { id } = useParams()
  const [product, setProduct] = useState()


  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json)
        console.log(json)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <div className='itemCardContainer'>
        <Card className="card">
          <Card.Title>{product?.title}</Card.Title>
          <Card.Img variant="top" src={product?.image} />
          <Card.Body>
            <Card.Text >
              <p >{product?.description}</p>
              <h3>USD ${product?.price}</h3>
            </Card.Text>
          </Card.Body>
        </Card>
        <div>
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer