import React from "react";
import { ImageDiv } from "./styles";

const ProfileImage = ({ src, alt }) => {
  return <ImageDiv src={src} alt={alt} />;
};

export default ProfileImage;
