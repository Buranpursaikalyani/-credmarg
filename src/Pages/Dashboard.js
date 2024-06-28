import EmployeeForm from '../Components/EmployeeForm';
import VendorForm from '../Components/VendorForm';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Add Employee</h2>
          <EmployeeForm />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Add Vendor</h2>
          <VendorForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
