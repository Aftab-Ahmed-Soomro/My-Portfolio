import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Banner4 from '../Projectss/Banner4'
import { Banner4items1 } from '../../utils/constants/Banner4items'
import Footer from '../Footer/Footer'

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
