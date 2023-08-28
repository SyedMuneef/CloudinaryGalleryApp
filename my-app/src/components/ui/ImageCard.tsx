"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const ImageCard = (props: any) => {
  return <CldImage {...props} />;
};

export default ImageCard;
