import React, { useState, useEffect } from "react";
// import fakedata from "../../fakedata/index";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import fakedata from "../../fakedata";

const Home = () => {
  const [cart, setCart] = useState([]);

  // // using fakedata
  // const [users, setUsers] = useState(fakedata);

  // Load data from api call
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // handleAddFriend
  const handleAddFriend = (user) => {
    if (cart.some((item) => item.id === user.id)) {
      window.alert("you have already added this person");
      return;
    }
    setCart([...cart, user]);
    addToDatabaseCart(user.id, 1);
  };

  const styles = {
    border: "1px solid red",
    borderRadius: "10px",
    margin: "20px",
    padding: "5px",
  };

  return (
    <>
      <div className="d-flex">
        <div className="col-md-8">
          {users.map((user) => (
            <div style={styles} key={user.id}>
              <h3>Name: {user.name}</h3>
              <Link to={`/userCollection/${user.id}`}>
                Show details
                <br />
                <Button>Show Details</Button>
              </Link>
              <br />
              <Button
                variant="success"
                onClick={() => {
                  handleAddFriend(user);
                }}
              >
                Add Friend
              </Button>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Home;
