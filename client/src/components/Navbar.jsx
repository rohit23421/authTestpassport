import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Auth App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.indianexpress.com/2021/08/what-if-episode-3-tony-stark-1200.jpg"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Tony stark</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="Login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
