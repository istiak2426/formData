import './App.css';
import React, { useState } from 'react';


function App() {

    // State to manage form values
    const [formData, setFormData] = useState({
      name: '',
      shippingAddress: '',
      creditCardNumber: '',
      expirationDate: '',
      cvv: '',
    });
  
    // Function to handle changes in form fields and update the state
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any necessary actions with the form data, e.g., submit to a server
      console.log('Form Data Submitted:', formData);
    };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />

      <label>
        Shipping Address:
        <textarea
          name="shippingAddress"
          value={formData.shippingAddress}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />

      <label>
        Credit Card Number:
        <input
          type="text"
          name="creditCardNumber"
          value={formData.creditCardNumber}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />

      <label>
        Expiration Date:
        <input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />

      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
