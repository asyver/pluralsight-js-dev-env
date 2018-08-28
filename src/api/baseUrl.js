export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  console.log('development', inDevelopment);
  return inDevelopment ? 'http://localhost:3001/' : '/';
}
