import Header from './Header.jsx'
import Footer from './Footer.jsx'
import AdminLogin from '../Admin/Adminlogin.jsx';
import Home from './Home.jsx'
import Login from './Login.jsx'
import AdminPanel from '../Admin/AdminPanel.jsx';
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import ViewProduct from '../Admin/ViewProduct.jsx';
import EditProduct from '../Admin/Editproduct.jsx';
 import ProductPage from './ProductPage.jsx';
import AddProduct from '../Admin/AddProduct.jsx';
import Chart from './Chart.jsx';
import MyBookings from './MyBookings.jsx';
import AdminAnalytics from '../Admin/AdminAnalytics';

import PaymentSuccess from './PaymentSuccess';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
           <Route path="/admlog" element={<AdminLogin/>}/> 
           <Route path="/admnPanel" element={<AdminPanel/>}/>
           <Route path="/addProduct" element={<AddProduct/>}/>
            <Route path="/viewproduct" element={<ViewProduct/>}/> 
      <Route path="/edit-product/:id" element={<EditProduct/>}/>        
      <Route path="/product/:id" element={<ProductPage/>}/> 
      <Route path="/chart" element={<Chart data={{
       
        
      }} />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/analytics" element={<AdminAnalytics />} />
      <Route
   path="/payment-success"
   element={<PaymentSuccess />}
/>
</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;