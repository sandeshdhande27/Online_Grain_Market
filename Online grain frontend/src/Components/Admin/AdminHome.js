
import React from 'react'
import AdminFooter from './AdminFooter'
import AdminNavbar from './AdminNavbar'
import Carousel from '../Carousel/Carausel'
export default function AdminHome() {
  return (
    <div>
      <AdminNavbar/>
      <Carousel></Carousel>
   
      <AdminFooter/>
    </div>
  )
}
