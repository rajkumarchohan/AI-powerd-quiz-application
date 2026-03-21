// API configuration:
// - Prefer REACT_APP_API_URL when explicitly provided.
// - In development, default to relative path so setupProxy handles /api.
// - In production, default to same-origin to avoid hardcoded localhost failures.
function normalizeApiUrl(url) {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.replace(/\/+$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `http://${trimmed}`;
}

const configuredUrl = normalizeApiUrl(process.env.REACT_APP_API_URL);
const isDevelopment = process.env.NODE_ENV === 'development';
const API_URL = configuredUrl || (isDevelopment ? '' : window.location.origin);

export default API_URL;
