import { Link } from "react-router-dom";
import "../styles/NoPage.css"; // optional: for styling

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
