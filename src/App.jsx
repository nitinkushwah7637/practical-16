
import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [products, setProducts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      category: category,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setCategory("");
  }

  return (
    <div className="container">
      <h1>Product Management</h1>

      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Product Price (₹)</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Accessories">Accessories</option>
        </select>

        <button type="submit">Add Product</button>
      </form>

      <h2>Product List ({products.length})</h2>

      {products.length === 0 ? (
        <p className="empty">No products added yet.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> ₹{product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
