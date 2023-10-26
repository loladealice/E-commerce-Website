import React from 'react'
import {Routes, Route} from "react-router-dom";
import Categories from '../Pages/Categories';
import Home from '../Pages/Home';

function AppRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/:categoriesId' element={<Categories/>}></Route>
    </Routes>
  )
}

export default AppRoutes