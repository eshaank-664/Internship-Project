import "./css/Header.css";
import language from "./assets/language.png";
import help from "./assets/question.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bnglr from "./assets/bnglr.png";
import logo from "./assets/logo boking.jpg";

function Header() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const api = "http://localhost:5000";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${api}/api/products/all`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);



  return (
    <div>
      <nav>
        <img src={logo}  style={{ height: 60, width: 'auto' }} />
        <div className="Lang-help">
          <a href="#"><img src={language} alt="language" /></a>
          <a href="#"><img src={help} alt="help" /></a>
        </div>




      </nav>


      <nav class="topbuton">

        <ul>
          <button class="navigbuton">Stays</button>
          <button class="navigbuton">Flights</button>
          <button class="navigbuton">Car rentals</button>
          <button class="navigbuton">Attractions</button>
          <button class="navigbuton">Airport taxis</button>
        </ul>
        <button class="mybooking" onClick={() => navigate('/my-bookings')}>
          My Bookings
        </button>

        <p class="hedr"> Find your next stay</p>

      </nav>


 <div class="card-container">
        <div class="statcard">
          <img src={bnglr} alt="Hotel 1" />
          <div class="card-content">
            <h2> Bangalore</h2>
          </div>



          <div class="statcard">
            <img src="https://tse3.mm.bing.net/th/id/OIP.Jw5Lq-sZX59EtPY7DEtnHwHaEp?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Hotel 1" />
            <div class="card-content">
              <h2> Chennai</h2>
            </div>
          </div>
        </div> 

</div>

     

<p class="mntext"> Explore our top Hotels</p>

      {products.map((product) => (
        <div className="card" key={product._id}>
          <img
            onClick={() => navigate(`/product/${product._id}`)}
            src={`${api}/uploads/${product.imageUrl}`}
            alt={product.name}
          />

          <div class="card-content">
            <h2>{product.name}</h2>
            <h3 class="prodlocation">{product.location}</h3>
            <h3 class="prodprice">₹{product.price}</h3>
          </div>
        </div>
      ))}
    </div>
  

   );
}
export default Header;