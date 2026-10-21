import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [existingImage, setExistingImage] = useState('');

  const api = 'http://localhost:5000';

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`${api}/api/products/${id}`);

      // ✅ IMPORTANT CHECK
      if (!res.ok) {
        throw new Error("Product not found");
      }

      const data = await res.json();

      setName(data.name || '');
      setDescription(data.description || '');
      setPrice(data.price || '');
      setRating(data.rating || '');
      setLocation(data.location || '');
      setExistingImage(data.imageUrl || '');

    } catch (err) {
      console.error("Error fetching product:", err);
      alert("Failed to load product");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      payload.append('name', name);
      payload.append('description', description);
      payload.append('price', parseFloat(price));
      payload.append('rating', parseFloat(rating));
      payload.append('location', location);

      if (imageFile) {
        payload.append('image', imageFile);
      }

      const res = await fetch(`${api}/api/products/${id}`, {
        method: 'PUT',
        body: payload
      });

      if (!res.ok) {
        throw new Error("Update failed");
      }

      alert("Product updated successfully!");

      // ✅ FIXED ROUTE
      navigate('/viewproduct');

    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product");
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /><br />

        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /><br />

        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" /><br />

        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" /><br />

        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" /><br />

        {existingImage && (
          <div>
            <p>Current Image:</p>
            {existingImage && (
  <img
    src={`http://localhost:5000/uploads/${existingImage}`}
    width="100"
  />
)}
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        /><br />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;