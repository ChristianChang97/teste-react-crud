import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function User(props) {
  const { user } = props;

  return (
    <Link to={`/usuario/${user._id}`}>
      <div className="card">
        <FaUserAlt style={{ fontSize: "10rem" }} />
        <div className="card-body">
          <h2>{user.name + " " + user.lastName}</h2>
        </div>
      </div>
    </Link>
  );
}
