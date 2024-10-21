const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  FORMS: `${API_BASE_URL}/forms`,
  RESPONSES: `${API_BASE_URL}/responses`,
};