import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const addEmployee = (employee) => axios.post(`${API_URL}/employees`, employee);

export const getVendors = () => axios.get(`${API_URL}/vendors`);
export const addVendor = (vendor) => axios.post(`${API_URL}/vendors`, vendor);

export const sendEmailstoVendors = (email) => axios.post(`${API_URL}/send-email`, email);
export const getEmails = () => axios.get(`${API_URL}/emails`);
