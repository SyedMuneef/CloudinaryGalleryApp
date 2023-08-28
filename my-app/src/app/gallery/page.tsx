import React from "react";
import UploadButton from "@/components/ui/UploadButton";
import { Button } from "@/components/ui/Button";
import cloudinary from "cloudinary";
import ImageCard from "@/components/ui/ImageCard";

type searcResult = {
  public_id: string;
};
const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: searcResult[] };

  return (
    <section>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Gallery</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <ImageCard
              key={result.public_id}
              src={result.public_id}
              width="400"
              height="300"
              alt="An image of something"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
