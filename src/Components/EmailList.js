import { useEffect, useState } from 'react';
import { getEmails } from '../Services/api';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const { data } = await getEmails();
      console.log('Fetched emails:', data); // Log fetched emails
      setEmails(data);
    };
    fetchEmails();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sent Emails</h2>
      <ul className="space-y-2">
        {emails.map((email, index) => (
          <li key={index} className="border p-2 rounded">
            <p><strong>To:</strong> {email.to}</p>
            <p><strong>Message:</strong> {email.message}</p>
            <p><strong>Timestamp:</strong> {email.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
