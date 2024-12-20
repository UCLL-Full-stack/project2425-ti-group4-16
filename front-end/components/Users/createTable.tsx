import React from "react";

const users = [
  {
    username: "admin1",
    password: "adminPass",
    role: "ADMIN",
  },
  {
    username: "user1",
    password: "userPass",
    role: "USER",
  },
  {
    username: "admin",
    password: "adminnn",
    role: "ADMIN",
  },
  {
    username: "guest1",
    password: "gestpass",
    role: "USER",
  },
];

const UsersTable: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Username</th>
            <th className="border border-gray-300 p-2">Password</th>
            <th className="border border-gray-300 p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border border-gray-300 p-2">{user.username}</td>
              <td className="border border-gray-300 p-2">{user.password}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
