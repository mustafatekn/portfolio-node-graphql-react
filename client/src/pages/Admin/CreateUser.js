import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
      createdAt
    }
  }
`;

export default function CreateUser(props) {
  const [variables, setVariables] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors = null, setErrors] = useState({});

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    update: (_, __) => props.history.push('/mrcadministration') ,
    onError: (err) => {
      if(err.graphQLErrors[0]){
        setErrors(err.graphQLErrors[0].extensions.errors)
      }
    }
  });

  const submitCreateUserForm = (e) => {
    e.preventDefault();
    createUser({ variables });
  };

  return (
      <div className="container py-5">
        <div className="py-5">
        <form className="w-50 mx-auto" onSubmit={submitCreateUserForm}>
           <div className="mb-3">
            <small className="text-danger">
              <p>{errors.username ? 'Kullanıcı adı başka bir hesap tarafından kullanılıyor.': ''}</p>
              <p>{errors.email ? 'Email başka bir hesap tarafından kullanılıyor.' : ''}</p>
              <p>{errors.password}</p>
              <p>{errors.confirmPassword}</p>
            </small>
          </div> 
          <div className="mb-3">
            <input
              type="text"
              value={variables.username}
              onChange={(e) =>
                setVariables({ ...variables, username: e.target.value })
              }
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Kullanıcı Adı"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={variables.email}
              onChange={(e) =>
                setVariables({ ...variables, email: e.target.value })
              }
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="e-Mail"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={variables.password}
              onChange={(e) =>
                setVariables({ ...variables, password: e.target.value })
              }
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Şifre"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={variables.confirmPassword}
              onChange={(e) =>
                setVariables({
                  ...variables,
                  confirmPassword: e.target.value,
                })
              }
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Şifrenizi tekrar girin"
            />
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn bg-white fw-bold"
              type="submit"
              disabled={loading}
            >
              Oluştur
            </button>
          </div>
        </form>
        </div>
      </div>
  );
}