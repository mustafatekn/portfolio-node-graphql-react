import React from "react";

export default function Message({ message }) {
  return (
    <div className="card my-5 w-75 mx-auto bg-white opacity-75 px-3">
      <div className="card-body">
        <h5 className="card-title mb-3">Konu:{message.subject}</h5>
        <p className="card-text">Email:{message.email}</p>
        <p className="card-text">Mesaj:{message.content}</p>
        <small>Gönderilme zamanı{message.createdAt}</small>
      </div>
    </div>
  );
}
