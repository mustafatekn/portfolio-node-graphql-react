import React, {useState} from "react";
import {gql, useLazyQuery} from '@apollo/client'
import Navbar from "../../components/navbar";
import { useAuthDispatch } from "../../context/auth";

const LOGIN_USER = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email 
      createdAt
      token
    }
  }
`;

export default function Login(props) {

  const [variables, setVariables] = useState({
    username: '',
    password: '',
  });

  const [ errors, setErrors] = useState({});

  const dispatch = useAuthDispatch();

  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
    onCompleted(data) {
      dispatch({ type: "LOGIN", payload: data.login });
      window.location.href='/mrcadministration'
    },
  });

  const submitLoginForm = (e) => {
    e.preventDefault();

    loginUser({ variables });
  };

  return (
    <div>
      <header>
        <Navbar />
        <div className="container">
          <div className="py-5 mx-auto">
            <p className="fs-md fst-italic text-center fw-bold my-5 py-5">
              Admin Girişi
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="container pb-5">
          <div id="contact-form-wrapper">
          <form className="p-4 mx-auto" id="contact-form" onSubmit={submitLoginForm}>
          <div className="mb-4">
          <small className="text-danger">
              <p>{errors.username}</p>
              <p>{errors.password}</p>
            </small>
          </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={variables.username}
                  id="subject"
                  aria-describedby="emailHelp"
                  placeholder="kullanıcı adı"
                  onChange={(e) =>
                    setVariables({ ...variables, username: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  value={variables.password}
                  name="password"
                  id="password"
                  aria-describedby="passwordHelp"
                  placeholder="şifre"
                  onChange={(e) =>
                    setVariables({ ...variables, password: e.target.value })
                  }
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn bg-white fw-bold" type="submit" disabled={loading}>
                  Giriş
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
