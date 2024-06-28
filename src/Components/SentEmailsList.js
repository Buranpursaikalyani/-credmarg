import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SentEmailsList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                // Correcting the request method to GET
                const response = await axios.get('http://localhost:8080/api/emails');
                setEmails(response.data);
            } catch (error) {
                console.error("Error fetching sent emails:", error);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Sent Emails</h2>
            {emails.length === 0 ? (
                <p>No sent emails available.</p>
            ) : (
                <ul className="space-y-2">
                    {emails.map((email, index) => (
                        <li key={index} className="border p-2 rounded">
                            <p><strong>To:</strong> {email.to}</p>
                            <p><strong>Message:</strong> {email.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SentEmailsList;
