import React from "react";
import cloudinary from "cloudinary";
import ImageCard from "@/components/ui/ImageCard";

export type searcResult = {
  public_id: string;
  tags: string[];
};
const FavoritePage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: searcResult[] };

  return (
    <section>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">favorite Images</h1>
        </div>
        <div className="columns-4 gap-2 space-y-2 mx-auto">
          {results.resources.map((result) => (
            <div className="break-inside-avoid ">
              <ImageCard
                path="/favorites"
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

export default FavoritePage;
