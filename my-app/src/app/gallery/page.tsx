import React from "react";
import UploadButton from "@/components/ui/UploadButton";
import cloudinary from "cloudinary";
import ImageCard from "@/components/ui/ImageCard";
import { Heart } from "lucide-react";
import { FavoriteTagAction } from "./action";

export type searcResult = {
  public_id: string;
  tags: string[];
};
const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: searcResult[] };

  return (
    <section>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Gallery</h1>
          <UploadButton />
        </div>
        <div className="columns-4 gap-2 space-y-2 mx-auto">
          {results.resources.map((result) => (
            <div className="break-inside-avoid ">
              <ImageCard
                path="/gallery"
                key={result.public_id}
                imageData={result}
                width="300"
                height="300"
                size="100vw"
                alt="An image of something"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
