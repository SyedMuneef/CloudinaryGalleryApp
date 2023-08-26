import React from "react";
import UploadButton from "@/components/ui/UploadButton";
import { Button } from "@/components/ui/Button";

const GalleryPage = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl">Gallery</h1>
        <Button variant={"destructive"}> is it runnign</Button> <UploadButton />
      </div>
    </section>
  );
};

export default GalleryPage;
