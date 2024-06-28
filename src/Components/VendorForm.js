
import { useState } from 'react';
import { addVendor } from '../Services/api';

const VendorForm = () => {
  const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Vendor data to be added:', vendor); // Log vendor data
    await addVendor(vendor)
    setVendor({ name: '', email: '', upi: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={vendor.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded w-full" />
      <input type="email" name="email" value={vendor.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" />
      <input type="text" name="upi" value={vendor.upi} onChange={handleChange} placeholder="UPI" className="border p-2 rounded w-full" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Vendor</button>
    </form>
  );
}

export default VendorForm;
