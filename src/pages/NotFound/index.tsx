import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Try one of these pages:</p>
      <ul>
        <li>
          <Link to="/match-centre">
            <span>match-centre</span>
          </Link>
        </li>
        <li>
          <Link to="/team-standings">
            <span>team-standings</span>
          </Link>
        </li>
        <li>
          <Link to="/team-schedule">
            <span>team-schedule</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
