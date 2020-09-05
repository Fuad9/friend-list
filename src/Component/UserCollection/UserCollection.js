import React, { useState, useEffect } from "react";
import "./UserCollection.css";
import { useParams } from "react-router-dom";

const UserCollection = () => {
  const { userId } = useParams();
  const [friends, setFriends] = useState({});

  // to get friends details
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, [userId]);

  return (
    <div>
      <h3>Name: {friends.name}</h3>
      <h3>Email: {friends.email}</h3>
      <h3>Phone: {friends.phone}</h3>
      <h3>
        Company: {friends.company !== undefined ? friends.company.name : ""}
      </h3>
    </div>
  );
};

export default UserCollection;
