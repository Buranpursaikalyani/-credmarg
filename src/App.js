import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Employees from './Pages/Employees';
import Vendors from './Pages/Vendors';
import { Link } from 'react-router-dom';
import SentEmailsList from './Components/SentEmailsList';
import VendorList from './Components/VendorList';

const App = () => {
  return (
        <Router>
          <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-white p-4">
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Dashboard</Link></li>
                <li><Link to="/employees" className="hover:underline">Employees</Link></li>
                {/* <li><Link to="/vendors" className="hover:underline">Vendors</Link></li> */}
                <li><Link to="/vendors-list" className="hover:underline">Vendor List</Link></li>
                <li><Link to="/send-email" className="hover:underline">Sent Emails</Link></li>
              </ul>
            </nav>
            <div className="p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/send-email" element={<SentEmailsList />} />
                <Route path="/vendors-list" element={<VendorList />} />
              </Routes>
            </div>
          </div>
        </Router>
      );
    };

export default App;
