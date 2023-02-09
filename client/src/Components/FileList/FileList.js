import React from "react";
import axios from "axios";
import FileItem from "../FileItem/FileItem";

const FileList = ({ files, removeFile }) => {
  //this hadler will call the parrent removeFile to delete the file from the state of frontend
  //it will also make an API call to delete the file from server
  const deleteFileHandler = async (_name) => {
    try {
      const result = await axios.delete(
        `http://localhost:3030/upload?name=${_name}`
      );

      removeFile(_name);
    } catch (err) {
      console.log(err);
    }
  };
  //the component FileList will return an unordered list of FileItem components
  return (
    <ul className="file-list">
      {/* if there are files map them */}
      {files &&
        files.map((file) => (
          <FileItem
            key={file.name}
            file={file}
            deleteFile={deleteFileHandler}
          />
        ))}
    </ul>
  );
};

export default FileList;
