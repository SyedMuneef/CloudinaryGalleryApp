"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

function UploadButton() {
  const [imageId, setImageId] = useState("");
  interface IUploadResult {
    info: { public_id: string };
    event: "success";
  }

  return (
    <>
      <div>
        <CldUploadButton
          onUpload={(result: any) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="byxgiew7"
        />
      </div>
      <div>
        {imageId && (
          <CldImage
            width="300"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </div>
    </>
  );
}

export default UploadButton;
