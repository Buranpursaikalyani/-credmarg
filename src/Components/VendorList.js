import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [messageTemplate, setMessageTemplate] = useState('Sending payments to vendor { name } at UPI { upi }');

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/vendors');
            setVendors(response.data);
        } catch (error) {
            console.error("Error fetching vendors", error);
        }
    };

    const handleSelectVendor = (vendor) => {
        setSelectedVendors(prevSelected => {
            if (prevSelected.includes(vendor)) {
                return prevSelected.filter(v => v !== vendor);
            } else {
                return [...prevSelected, vendor];
            }
        });
    };

    const handleSendEmail = async () => {
        if (selectedVendors.length === 0) {
            alert("Please select at least one vendor.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/send-email', {
                vendors: selectedVendors,
                message: messageTemplate
            });
            if (response.status === 200) {
                alert("Emails sent successfully!");
            } else {
                alert("Failed to send emails. Please try again.");
            }
        } catch (error) {
            console.error("Error sending emails", error);
            alert("An error occurred while sending emails.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Vendors</h2>
            <textarea 
                value={messageTemplate}
                onChange={(e) => setMessageTemplate(e.target.value)}
                placeholder="Sending payments to vendor { name } at UPI { upi }"
                className="w-full h-24 p-2 border rounded mb-4"
            />
            <ul className="space-y-2">
                {vendors.map(vendor => (
                    <li key={vendor.email} className="flex items-center justify-between border p-2 rounded">
                        <label className="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                onChange={() => handleSelectVendor(vendor)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span>{vendor.name} - {vendor.upi}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <button 
                onClick={handleSendEmail} 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Send Email
            </button>
        </div>
    );
};

export default VendorList;
