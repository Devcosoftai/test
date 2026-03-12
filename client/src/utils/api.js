import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// ---- Contact ----
export const submitContact = (formData) =>
  api.post('/contact', formData);

// ---- Services ----
export const fetchServices = () =>
  api.get('/services');

export const fetchServiceById = (id) =>
  api.get(`/services/${id}`);

// ---- Stats ----
export const fetchStats = () =>
  api.get('/stats');

// ---- Newsletter ----
export const subscribeNewsletter = (email) =>
  api.post('/newsletter/subscribe', { email });

export default api;
