import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import authHeader from "../services/auth-header";
import NavBar from "./NavBar";

const queryClient = new QueryClient();

function Allusers() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const [users, setUsers] = useState([]);

  const { isLoading, error, data } = useQuery("loadUsers", () =>
    fetch(`http://localhost:8080/api/v1/allusers`, {
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
  );

  return (
    <div>
      <NavBar showSearchBar={false} />

      <div className="d-flex align-items-center flex-column">
        <h1>All Users</h1>
        {isLoading ? <div>Loading all users</div> : null}
        {error ? <div>An error occured</div> : null}
        <table className="table table-hover w-75 align-items-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Roles</th>
            </tr>
          </thead>
          <tbody>
            {users.length !== 0 ? (
              users.map((user, index) => (
                <tr
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = `/users/${user.id}`;
                  }}
                  key={user.id}
                >
                  <td>{index}</td>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  {user.roles.length === 2 ? <td>Admin</td> : <td>User</td>}
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allusers;
