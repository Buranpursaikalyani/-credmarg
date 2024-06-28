import { useEffect, useState } from 'react';
import { getEmployees } from '../Services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await getEmployees();
      console.log('Fetched employees:', data); // Log fetched employees
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Employees</h2>
      <ul className="space-y-2">
        {employees.map(employee => (
          <li key={employee.email} className="border p-2 rounded">
            {employee.name} - {employee.designation} - {employee.ctc} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
