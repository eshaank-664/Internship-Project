import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ViewProduct.css';

function ViewProduct() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const api = 'http://localhost:5000';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${api}/api/products/all`);

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setProducts(data);

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`${api}/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts(products.filter(p => p._id !== productId));
      } else {
        console.error('Failed to delete product');
      }

    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <table>
        <thead className="Contenttble">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                
                  <img
  src={`http://localhost:5000/uploads/${product.imageUrl}`}
  alt={product.name}
  width="100"
/>
            
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.location}</td>

              <td>
                <button
                  className="Proddelete"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>

                <button
                  onClick={() => navigate(`/edit-product/${product._id}`)}
                >
                  Edit
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewProduct;