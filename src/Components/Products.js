import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../API'
import { List } from 'antd/es/form/Form'
import Card from 'antd/es/card/Card'

function Products() {
    const [items, setItems] = useState([])
    useEffect(() => {
        getAllProducts().then((res) =>{
          console.log(res.products)
            setItems(res.products)
            
        })
    },[])
  return (
    <div>
        <List
         grid={{column: 3}}
         renderItem={(product,index)=>{
            return(
                <Card
                title ={product.title} 
                key={index} 
                 cover={<image src={product.thumbnail}/>}
                >
                </Card>
            )
        }}
         dataSource={items}></List>
    </div>
  )
}

export default Products
