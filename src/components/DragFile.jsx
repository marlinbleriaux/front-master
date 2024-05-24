import React, { useState } from "react";

import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

function DragFiles({ onFileChange, eltId = "file" }) {
  const [file, setFile] = useState(null);
  const handlefileChange = (file) => {
    setFile(file);
    onFileChange(file);
    const downloadLink = document.createElement("img");
    downloadLink.src = URL.createObjectURL(file);
    downloadLink.alt = file.name;
    downloadLink.className =
      "mx-[0.5vh] my-[0.5vh]  max-w-[50vh] max-h-[40vh] border border-dashed border-gray-400 p-4 ";
    document.getElementById(eltId).appendChild(downloadLink);
  };

  return <FileUploader handleChange={handlefileChange} types={fileTypes} />;
}

export default DragFiles;
