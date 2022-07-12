import Navbar from './Navbar'
import Footer from './Footer'

import React from 'react'

type DashboardLayoutProps = {
    children: React.ReactNode,
};

const Layout = ({children}:DashboardLayoutProps) => {
  return (
    <>
      <Navbar setColor="blue" />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout