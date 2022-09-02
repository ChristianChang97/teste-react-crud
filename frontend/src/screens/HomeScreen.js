import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "../components/User";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/users");
      console.log(data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row center">
        {users.map((user) => (
          <User key={user._id} user={user}></User>
        ))}
      </div>
    </div>
  );
}
