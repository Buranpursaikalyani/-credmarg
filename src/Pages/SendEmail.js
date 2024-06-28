import EmailForm from '../Components/EmailForm';
import EmailList from '../Components/EmailList';

const SendEmail = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Send Email</h1>
      <EmailForm />
      <h2 className="text-xl font-bold mt-8 mb-4">Sent Emails</h2>
      <EmailList />
    </div>
  );
};

export default SendEmail;
