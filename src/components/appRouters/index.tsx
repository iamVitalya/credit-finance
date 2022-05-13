import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../page/home'
import Layout from '../../layouts'

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
    </Route>
  </Routes>
)

export default AppRouter;
