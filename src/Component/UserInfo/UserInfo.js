import React, { useState } from "react";
import "./UserInfo.css";
import { useEffect } from "react";
import fakedata from "../../fakedata";
import { getDatabaseCart } from "../../utilities/databaseManager";

const UserInfo = () => {
  // using fakedata
  const [users, setUsers] = useState(fakedata);

  // // call api
  // const [users, setUsers] = useState([]);

  // // to load data from Api call
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // to load data from local storage
  useEffect(() => {
    const savedFriends = getDatabaseCart();
    // console.log(savedFriends);
    const friendsId = Object.keys(savedFriends);
    console.log(friendsId);
    const countFriends = friendsId.map((key) => {
      const friend = fakedata.find((fd) => fd.id == key);
      console.log(friend);
      return friend;
    });
    setUsers(countFriends);
  }, []);

  console.log(users);

  return (
    <div className="userInfo-container">
      <div className="userInfo">
        {users.map((user) => (
          <div>
            <h4>Name: {user.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
