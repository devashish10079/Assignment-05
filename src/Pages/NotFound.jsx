import { Link } from 'react-router';

function NotFound() {
  return (
    <main className="page-container not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/" className="primary-button">Back to Home</Link>
    </main>
  );
}

export default NotFound;