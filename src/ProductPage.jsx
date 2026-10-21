import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './css/Productpage.css';

function ProductPage() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const api = "http://localhost:5000";

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await fetch(`${api}/api/products/${id}`);

        const data = await res.json();

        setProduct(data);

      } catch (err) {

        console.error("Error loading product:", err);

      }
    };

    fetchProduct();

  }, [id]);

  const handleBook = async () => {

    if (!email) {

      alert("Please enter email");

      return;

    }

    try {

      localStorage.setItem(

        "pendingBooking",

        JSON.stringify({

          userMail: email,

          hotelId: product._id,

          hotelName: product.name,

          hotelImage: product.imageUrl

        })

      );

      const res = await fetch(

        'http://localhost:5000/api/orders/create-checkout-session',

        {

          method: 'POST',

          headers: {

            'Content-Type': 'application/json'

          },

          body: JSON.stringify({

            hotelName: product.name,

            price: product.price

          })

        }

      );

      const data = await res.json();

      window.location.href = data.url;

    } catch (err) {

      console.log(err);

    }

  };

  if (!product) return <h2>Loading...</h2>;

  return (
    
 <div class="product-container">
  <div className="product-page">
      <img
        src={`${api}/uploads/${product.imageUrl}`}
        alt={product.name}
        style={{
          width: "500px",
          borderRadius: "10px"
        }}
      />
       
  
     
      <h1 class="product-name">{product.name}</h1>
        
      <h3 class="product-location">{product.location}</h3>

      <h2 class="product-price">₹{product.price}</h2>

      <p>{product.description}</p>

      <p class="product-rating">⭐ Rating: {product.rating}</p>
 
     
    <div class="email-container"> 
      <input
        type="email"
        class="email-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="paybuton"
        onClick={handleBook}>
        Book Now
    </button>
  </div>
  </div>    

</div>
    
  );
}

export default ProductPage;