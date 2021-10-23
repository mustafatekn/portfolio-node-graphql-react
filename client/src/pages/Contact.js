import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import EditButton from "../components/EditTextButton";
import { gql, useMutation } from "@apollo/client";

const SEND_MESSAGE = gql`
  mutation sendMessage(
    $subject: String!, 
    $email: String!, 
    $content: String!
    ) {
    sendMessage(
      subject: $subject, 
      email: $email, 
      content: $content) {
      subject
      email
      content
      createdAt
    }
  }
`;

export default function Contact(props) {
  const [variables, setVariables] = useState({
    subject: "",
    email: "",
    content: "",
  });

  const [errors = null, setErrors] = useState({});

  const [sendMessage, { loading }] = useMutation(SEND_MESSAGE, {
    update: (_, __) => props.history.push("/contact"),
    onError: (err) => {
      if (err.graphQLErrors[0]) {
        setErrors(err.graphQLErrors[0].extensions.errors);
      }
    },
  });

  const submitContactForm = (e) => {
    e.preventDefault();
    sendMessage({ variables });
      clearInputs();
  };

  const clearInputs = () => {
    document.getElementById("contact-form").reset();
    const summary = document.getElementById('summary');
    
    summary.innerHTML= '<p id="contact-summary-text">Mesajınız gönderildi!</p>';
  }
  return (
    <div>
      <header>
        <Navbar />
        <div className="container">
          <div className="py-5 mx-auto">
            <p className="fs-md fst-italic text-center fw-bold my-5 py-5">
              <span>
                Bilgi almak veya iletişim kurmak için <EditButton />
              </span>
              <br />
              <span>
                mesaj gönderin.
                <EditButton />
              </span>
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="container pb-5">
          <div id="contact-form-wrapper">
            <form
              className="p-4 mx-auto"
              onSubmit={submitContactForm}
              id="contact-form"
            >
              <div className="mb-4">
                <small className="text-danger text-center" id="summary">
                  <p>{errors.subject}</p>
                  <p>{errors.email}</p>
                  <p>{errors.content}</p>
                </small>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  value={variables.subject}
                  onChange={(e) =>
                    setVariables({ ...variables, subject: e.target.value })
                  }
                  name="subject"
                  id="subject"
                  aria-describedby="emailHelp"
                  placeholder="konu"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  value={variables.email}
                  onChange={(e) =>
                    setVariables({ ...variables, email: e.target.value })
                  }
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="e-mail"
                />
              </div>
              <div className="mb-4">
              <input
                  type="text"
                  size="4"
                  className="form-control"
                  value={variables.content}
                  onChange={(e) =>
                    setVariables({ ...variables, content: e.target.value })
                  }
                  name="content"
                  id="content"
                  aria-describedby="emailHelp"
                  placeholder="Mesajınız"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn bg-white fw-bold"
                  type="submit"
                  disabled={loading}
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <section>
        <div className="py-5">
          <p className="fs-md fst-italic text-center fw-bold my-2 py-5">
            Bana sosyal medya hesaplarımdan ulaşabilirsiniz
          </p>
          <div className="text-center fs-md" id="contact-links-outer">
            <ul className="list-group bg-transparent mx-auto d-inline">
              <li className="list-group-item mx-0 fw-bold border-0 bg-transparent d-inline px-0">
                <Link to="#" className="nav-link  d-inline">
                  <i className="fab fa-linkedin-in p-2 f-xxl"></i>
                </Link>
              </li>
              <li className="list-group-item mx-0 fw-bold border-0 bg-transparent d-inline px-0">
                <Link to="#" className="nav-link  d-inline">
                  <i className="fab fa-pinterest-p p-2"></i>
                </Link>
              </li>
              <li className="list-group-item mx-0 fw-bold border-0 bg-transparent d-inline px-0">
                <Link to="#" className="nav-link  d-inline">
                  <i className="fab fa-instagram p-2"></i>
                </Link>
              </li>

              <li className="list-group-item mx-0 fw-bold border-0 bg-transparent d-inline px-0">
                <Link to="#" className="nav-link  d-inline">
                  <i className="fab fa-behance p-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
