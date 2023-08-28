"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "./Button";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";

function UploadButton() {
  const router = useRouter();
  const [imageId, setImageId] = useState("");
  interface IUploadResult {
    info: { public_id: string };
    event: "success";
  }

  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result) => {
          let res = result as IUploadResult;
          setImageId(res.info.public_id);

          setTimeout(() => {
            router.refresh();
          }, 100);
        }}
        uploadPreset="byxgiew7"
      >
        {" "}
        <div className="flex gap-2 items-center">
          <Upload />

          <h1>Upload</h1>
        </div>
      </CldUploadButton>
    </Button>
  );
}

export default UploadButton;
