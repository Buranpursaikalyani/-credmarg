import { useState } from 'react';
import { addEmployee } from '../Services/api';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Employee data to be added:', employee); // Log employee data
    await addEmployee(employee);
    setEmployee({ name: '', designation: '', ctc: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded w-full" />
      <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" className="border p-2 rounded w-full" />
      <input type="number" name="ctc" value={employee.ctc} onChange={handleChange} placeholder="CTC" className="border p-2 rounded w-full" />
      <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;

