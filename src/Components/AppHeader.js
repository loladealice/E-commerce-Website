import React from 'react'
import {HomeFilled} from "@ant-design/icons"
import{Menu} from "antd"
import { useNavigate } from 'react-router-dom'
function AppHeader() {
  const navigate = useNavigate()
  const onMenuClick =(item)=>{
    navigate(`/${item.key}`)
  }
  return (
    <div className='header'>
      <Menu
        onClick={onMenuClick}
        mode='horizontal'
        items={[
        {
          label: <HomeFilled/>,
          key: "home"
        },
        {
          label: "Men",
          key: "men",
          children: [
            {
              label: "Men's Shirts",
              key: "mens-shirts"
            },
            {
              label: "Men's Shoes",
              key: "mens-shoes"
            },
            {
              label: "Men's Watches",
              key: "mens-watches"
            }
          ]
        },
        {
          label: "Women",
          key: "women",
          children: [
               {
                label: "Women's Dresses",
                key: "womens-dresses"
               },
               {
                label: "Women's Shoes",
                key: "womens-shoes"
               },
               {
                label: "Women's Watches",
                key: "womens-watches"
               },
               {
                label: "Women's Jewellery",
                key: "womens-jewelery"
               }
        ]
        },
        {
          label: "Fragrances",
          key: "fragrances"
        }
      ]}/>
    </div>
  )
}

export default AppHeader
