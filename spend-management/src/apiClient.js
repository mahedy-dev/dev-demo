const axios = require('axios');

const API_BASE_URL = 'https://external-api.com'; // Replace with real API URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Authorization': `Bearer ${process.env.EXTERNAL_API_KEY}` }
});

module.exports = apiClient;
