import React from "react";
import { gql, useQuery } from "@apollo/client";
import Navbar from "../../components/navbar";
import AdminNavbar from '../../components/adminNavbar';
import CreateUser from "./CreateUser";
const GET_USERS = gql`
  query getUsers {
    getUsers {
      username
      email
      createdAt
    }
  }
`;

export default function Admin() {
  const { loading, data } = useQuery(GET_USERS);

  let usersMarkup;
  if (!data || loading) {
    usersMarkup = null;
  } else if (data.getUsers.length === 0) {
    usersMarkup = null;
  } else if (data.getUsers.length > 0) {
    usersMarkup = data.getUsers.map((user, index) => {
      return (
        <tr key={user.username}>
          <td>{index + 1}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.createdAt}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="py-5">
      <AdminNavbar/>
      <CreateUser />
      </main>
      
      <section>
        <div className="container py-5">
          <div className="py-5">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col">Kullanıcı Adı</th>
                  <th scope="col">Email</th>
                  <th scope="col">Oluşturulma Tarihi</th>
                </tr>
              </thead>
              <tbody>{usersMarkup}</tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
