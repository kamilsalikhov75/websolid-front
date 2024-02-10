import { API } from '../instance';

export const strapi = new API({
  baseUrl: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
  headers: { Authorization: `bearer ${process.env.STRAPI_TOKEN}` }
});
