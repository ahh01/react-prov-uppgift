import React from "react";
import useFetchData from "./useFetchData";

function UserList() {
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
