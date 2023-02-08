import "./App.scss";
import { useState } from "react";
//import our component from components
import FileUpload from "./Components/FileUpload";

function App() {
  //setting the app state here
  const [files, setFiles] = useState([
    {
      name: "myFile.pdf",
    },
  ]);

  //remove the file with the name equal with the filename passed
  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  console.log(files);

  return (
    <div className="App">
      <p className="title"> File uploader</p>
      {/* files and setFiles will be passed in the FileUpload component by props drilling*/}
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
    </div>
  );
}

export default App;
