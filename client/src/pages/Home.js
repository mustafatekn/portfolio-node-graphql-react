import React from "react";
import Navbar from "../components/navbar";
import { useAuthState } from "../context/auth";
import World from "../img/world.png";
import classNames from "classnames";
import { useMutation, gql } from "@apollo/client";
import EditButton from "../components/EditTextButton";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default function Home() {

  const { user } = useAuthState();

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
    onError: err => console.log(err)
  });

  const handleEditPicture = () => {
    const fileInput = document.getElementById('image-input');
    fileInput.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files
    if (!file) return;
    uploadFile({ variables: { file } });
  };

  
  let imageUploadButton;
  imageUploadButton = (
    <div id="upload-image">
      <input
      id="image-input"
      type="file"
      className="d-none"
      onChange={handleFileChange}
    ></input>
    <button type="button" onClick={handleEditPicture} className={classNames("btn btn-white",{
      invisible:!user
    })}><i className="fas fa-edit"></i></button>
    </div>
  );

  return (
    <div>
      <header>
        <Navbar />
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div id="header-text">
                <h1 className="fs-xl fw-bold">
                  <span>
                  Dijital Köftehor <EditButton/>
                  </span>
                  <br />
                  <span className="fs-lg">Pokemon üstadı oldu!<EditButton/></span> 
                </h1>
                <h2 className="fs-md p-0 m-0">
                  <span>Kendini Ash(Red) sandığı için <EditButton/></span>
                  <br />
                  <span>
                  pikachu ile neden pozum yok dediği görsel budur..<EditButton/>
                  </span>
                  <br />
                  <span className="fs-sm" id="header-bottom-text">
                    <span>Fotoğrafını çekemiyorsak 
                    çizebiliriz.. <EditButton/></span>
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div id="header-img-wrapper">
                <img
                  src="https://cdn.imageupload.workers.dev/zu4iK6Mt_tree-736885__480.jpg"
                  className="img-fluid float-end border-radient"
                  id="header-img"
                  alt="..."
                />
                <div>{imageUploadButton}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className=" py-5">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div id="main-img-wrapper">
                <img
                  src={World}
                  className="img-fluid float-start border-radient"
                  id="main-img"
                  alt="..."
                />
                <div>{imageUploadButton}</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div id="main-text">
                <p className="fs-xl text-white fw-bold">Lorem ipsum.<EditButton/></p>
                <p className="fs-md text-white fw-bold">
                  Lorem ipsum dolor sit amet.<EditButton/>
                </p>
                <p className="fs-sm text-white">Lorem ipsum dolor sit amet. <EditButton/></p>
                <p className="fs-sm text-white">Lorem ipsum dolor sit amet. <EditButton/></p>
                <div id="main-bottom-text">
                <p className="fs-sm">Lorem ipsum dolor sit amet. <EditButton/></p>
                <p className="fs-sm">Lorem ipsum dolor sit amet. <EditButton/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="empty-section">
        <div className="container"></div>
      </section>
    </div>
  );
}
