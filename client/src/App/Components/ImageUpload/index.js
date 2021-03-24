import React, { useState } from "react";
import { UploadButton } from "./styles";
import api from "../../../Api";
const acceptedTypes = ["image/jpeg", "image/png"];

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [errors, setErrors] = useState({
    fileError: "",
  });

  const handleFileUpload = async (event) => {
    const data = new FormData();

    if (!!selectedFile && selectedFile.size < 50000000) {
      data.append("file", selectedFile);
      try {
        let resp = await api.post(`/images/upload`, data);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    } else {
      return false;
    }
  };

  const handleFileChange = (files) => {
    let targetFile = files[0];

    if (targetFile) {
      if (targetFile.size > 50000000) {
        setErrors({
          ...errors,
          fileError: "File size exceeds 50mb",
        });
      } else if (!acceptedTypes.includes(targetFile.type)) {
        setErrors({
          ...errors,
          fileError: "Allowed formats: jpeg, png",
        });
      } else {
        setErrors({
          ...errors,
          fileError: "",
        });
        setSelectedFile(targetFile);
      }
    }
  };
  return (
    <div>
      <input type={"file"} onChange={(e) => handleFileChange(e.target.files)} />
      <UploadButton onClick={handleFileUpload}>upload</UploadButton>
    </div>
  );
};

export default ImageUpload;
