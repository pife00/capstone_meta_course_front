import { useState } from 'react'
import { Nav } from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Route, Routes } from "react-router-dom"
import { HomeView } from './views/HomeView'
import {BookingView} from './views/BookingView'
import { ConfirmedBooking } from './views/ConfirmedBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav /> 
      <main role="main">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path='/reserve-table' element={<BookingView />} />
          <Route path='/confirmed-booking/:time/:occasion/:guest/:date' element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
