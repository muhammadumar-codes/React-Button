import axios from "axios";
import "./Users.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

export default function Users() {
  const [User, SetUser] = useState([]);
  const [IsError, SetError] = useState(false);
  const [IsLoading, SetLoading] = useState(true);
  const [Selected, SetSelected] = useState(null);

  useEffect(() => {
    async function UserData() {
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responce.data;
        console.log(data);
        SetUser(data);
        SetLoading(false);
        SetError(false);
      } catch (error) {
        console.log(error);
        SetError(true);
        SetLoading(false);
      }
    }

    UserData();
  }, []);

  //   Showing Error and Loading here.
  if (IsError)
    return (
      <h1 className="text-center text-danger">
        Something went wrong. Check your connection !
      </h1>
    );
  if (IsLoading)
    return <h1 className="text-center text-success">Loading...</h1>;

  // Showing Card  Using Child  Components

  return (
    <>
      <Card>
        <div className="card-list-continer">
          <div className="card-container" style={{ width: "70%" }}>
            {User.map((item) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => SetSelected(item)}
                >
                  <h1>{item.id}</h1>
                  <h4>{item.name}</h4>
                  <p>{item.email}</p>
                </div>
              );
            })}
          </div>

          <div
            className="card-selected"
            style={{ width: "30%", height: "80vh" }}
          >
            {Selected ? (
              <div className="card" key={Selected.item}>
                <h1>{Selected.id}</h1>
                <h4>{Selected.name}</h4>
                <p>{Selected.email}</p>
              </div>
            ) : (
              <h1 id="show-meessage">Click a user card to view details</h1>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
