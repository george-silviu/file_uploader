import React from "react";
import "./FileItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faSpinner,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const FileItem = ({ file, deleteFile }) => {
  return (
    <li className="list-item" key={file.name}>
      <FontAwesomeIcon icon={faFile} />

      {/*The passed file name will be displayed here*/}
      <p>{file.name}</p>

      <div className="actions">
        {/* if the file is uploading display the spinner, else display the trash can */}
        {file.isUploading ? (
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        ) : (
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteFile(file.name)}
          />
        )}
      </div>
    </li>
  );
};

export default FileItem;
