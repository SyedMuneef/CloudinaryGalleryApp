"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Button } from "./Button";

function UploadButton() {
  const [imageId, setImageId] = useState("");
  interface IUploadResult {
    info: { public_id: string };
    event: "success";
  }

  return (
    <Button asChild>
    <CldUploadButton
      onUpload={(result: any) => {
        setImageId(result.info.public_id);
      }}
      uploadPreset="byxgiew7"
    />
    </Button>
  );
}

export default UploadButton;
