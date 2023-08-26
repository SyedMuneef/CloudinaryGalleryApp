"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Button } from "./Button";
import { Upload } from "lucide-react";

function UploadButton() {
  const [imageId, setImageId] = useState("");
  interface IUploadResult {
    info: { public_id: string };
    event: "success";
  }

  return (
    <Button asChild>
      <div className="flex gap-2">
        <Upload />
        <CldUploadButton
          onUpload={(result: any) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="byxgiew7"
        />
      </div>
    </Button>
  );
}

export default UploadButton;
