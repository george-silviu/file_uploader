import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.scss";

//destructuring the props passed in App.js
const FileUpload = ({ files, setFiles, removeFile }) => {
  //this function will perform a request to insert the files

  const uploadHandler = async (event) => {
    //get the first file selected from the event
    const file = event.target.files[0];
    //file is uploading, diplay the spinner icon
    file.isUploading = true;
    //pass the state by copying the previous array of selected files with the new one added
    setFiles([...files, file]);

    //first we define formData native object
    const formData = new FormData();
    //then we append the file to the formData object
    formData.append(file.name, file, file.name);

    try {
      //make a http request to server to store the formData and return it with an unique id
      const result = axios.post("http://localhost:3030/upload", formData);

      //if we get a response
      if (result) {
        //file uploading spinner stops
        file.isUploading = false;
        //we add the file to the state
        setFiles([...files, file]);
      }
    } catch (err) {
      //if the request did not succed log the error
      console.error(err);
      //we remove the file from our view
      removeFile(file.name);
    }
  };
  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>
        <p className="main">Supported files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
