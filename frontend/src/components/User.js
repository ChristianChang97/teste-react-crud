import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function User(props) {
  const { user } = props;

  return (
    <div className="card">
      <Link to={`/usuario/${user._id}`}>
        <FaUserAlt style={{ fontSize: "10rem" }} />
      </Link>
      <div className="card-body">
        <Link to="#">
          <h2>{user.name + " " + user.lastName}</h2>
        </Link>
      </div>
    </div>
  );
}
