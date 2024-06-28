import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/vendors');
                setVendors(response.data);
            } catch (error) {
                console.error("There was an error fetching the vendors!", error);
            }
        };

        fetchVendors();
    }, []);

    const handleSelectVendor = (vendor) => {
        setSelectedVendors(prevSelected => {
            if (prevSelected.includes(vendor)) {
                return prevSelected.filter(v => v !== vendor);
            } else {
                return [...prevSelected, vendor];
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/send-email', {
                vendors: selectedVendors,
                message: message
            });
            alert("Emails sent successfully!");
        } catch (error) {
            console.error("There was an error sending emails!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here. Use {name} and {upi} for placeholders."
                    required
                />
            </div>
            {vendors.map(vendor => (
                <div key={vendor.email}>
                    <input 
                        type="checkbox" 
                        value={vendor.email}
                        onChange={() => handleSelectVendor(vendor)}
                    />
                    {vendor.name} - {vendor.upi}
                </div>
            ))}
            <button type="submit">Send Emails</button>
        </form>
    );
};

export default EmailForm;



