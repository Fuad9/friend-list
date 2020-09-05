import React, { useState } from "react";
//import "./UserInfo.css";
import { useEffect } from "react";
import fakedata from "../../fakedata";
import { getDatabaseCart } from "../../utilities/databaseManager";

const UserInfo = () => {
  // // using fakedata
  // const [users, setUsers] = useState(fakedata);

  // // declaring state while calling api
  const [users, setUsers] = useState([]);

  // declaring state while loading data from local storage
  const [friends, setFriends] = useState([]);

  // to load data from Api call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // to load data from local storage
  useEffect(() => {
    const savedFriends = getDatabaseCart();
    const friendsId = Object.keys(savedFriends);
    setFriends(friendsId);
  }, []);

  return (
    <div className="userInfo-container">
      <div className="userInfo">
        {users.length > 0 &&
          friends.map((friendId) => {
            const friend = users.find((user) => user.id === parseInt(friendId));
            return (
              <div>
                <h4>Name: {friend.name}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserInfo;
