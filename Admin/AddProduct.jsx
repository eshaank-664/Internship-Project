import { useState, useRef } from "react";
import './AddProduct.css'


function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [location, setLocation] = useState('');
  const fileInputRef = useRef(null);

  const api = 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !rating || !imageFile || !location) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    try {
      const payload = new FormData();
      payload.append('name', name);
      payload.append('description', description);
      payload.append('price', parseFloat(price));
      payload.append('rating', parseFloat(rating));
      payload.append('image', imageFile);
      payload.append('location', location);

      const response = await fetch(`${api}/api/products/add`, {
        method: 'POST',
        body: payload
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      await response.json();

      alert('Product added successfully!');

      // reset form
      setName('');
      setDescription('');
      setPrice('');
      setRating('');
      setImageFile(null);
      setLocation('');
      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product');
    }
  };

  return (
    <div class="addproduct-container">
     
      <form className="productfrm" onSubmit={handleSubmit}>
         <h2 className="prod">Add Product</h2>
        <input class="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="text" class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
        <input type="number" class="form-control" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
        <input type="number" class="form-control" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} /><br />
        <input type="file" class="form-control" ref={fileInputRef} accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} /><br />
        <input type="text" class="form-control" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;