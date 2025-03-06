import React from "react";
import './App.css';
import { Header } from './components/shared-components/Header';
import { Footer } from "./components/shared-components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Products } from "./components/products/Products";
import { Career } from "./components/career/Career";
import { Contact } from "./components/contact/Contact";
import { SuccessStories } from "./components/successStories/SuccessStories";
import { useParams } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            {/* Single Page Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/success-stories" element={<SuccessStories />} />

            {/* Nested Routes for Dropdown Components */}
            <Route>
              {/* <Route index element={<h2>Please select a service</h2>} />*/}
              <Route path="/services/:serviceId" element={<Services />} />
            </Route>
            <Route>
              <Route path="/products/:productId" element={<Products />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
