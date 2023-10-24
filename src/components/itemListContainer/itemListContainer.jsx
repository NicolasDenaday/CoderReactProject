import React from 'react'
import './itemListContainer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Spin } from 'antd';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function ItemListContainer() {

  const [products, setProducts] = useState([])
  const { nombreCategoria } = useParams()


  useEffect(() => {
    const url = nombreCategoria ? `https://fakestoreapi.com/products/category/${nombreCategoria}` : `https://fakestoreapi.com/products`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json)
      })
      .catch(error => console.error(error))
  }, [nombreCategoria])
  return (
    <>
      {products.length > 0 ? (
        <div className='cardContainer'>
          {products.map((prod) => <Card key={prod.id} className="productCard">
            <Card.Img variant="top" src={prod?.image} />
            <Card.Body className='cardBody'>
              <div>
                <Card.Title>{prod?.title}</Card.Title>
                <Card.Text>
                  {prod?.description}
                </Card.Text>
              </div>
              <Link to={`/item/${prod.id}`}><Button variant="primary">Ver detalle</Button></Link>
            </Card.Body>
          </Card>)}
        </div>
      ) : (
        <Spin />
      )}
    </>
  )
}

export default ItemListContainer