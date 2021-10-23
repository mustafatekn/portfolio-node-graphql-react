import React from "react";
import { gql, useQuery } from "@apollo/client";
import Navbar from "../../components/navbar";
import AdminNavbar from "../../components/adminNavbar";
import Message from "./Message";

const GET_MESSAGES = gql`
  query getMessages {
    getMessages {
      id
      subject
      email
      content
      createdAt
    }
  }
`;

export default function Messages() {
  let messagesMarkup;
  const { loading, data } = useQuery(GET_MESSAGES);
  if (!data || loading) {
    messagesMarkup = <span>Mesajlar bekleniyor...</span>;
  } else if (data.getMessages.length === 0) {
    messagesMarkup = <span>Henüz bir mesajınız yok</span>;
  } else if (data.getMessages.length > 0) {
    messagesMarkup = data.getMessages.map((message) => {
      return (
        <div key={message.id}>
          <Message message={message} />
        </div>
      );
    });
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
      
        <div className="container p-5">
        <AdminNavbar/>
          {messagesMarkup}
          </div>
      </main>
    </div>
  );
}
