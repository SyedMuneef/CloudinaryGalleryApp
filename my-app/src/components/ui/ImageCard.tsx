"use client";
import { Heart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React, { startTransition, useTransition } from "react";
import { FavoriteTagAction } from "@/app/gallery/action";
import { searcResult } from "@/app/gallery/page";

const ImageCard = (props: any & { imageData: searcResult }) => {
  const [transition, startTransition] = useTransition();
  const { imageData } = props;
  const isFavorited = imageData.tags.includes("favorite");
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} className="rounded-sm" />

      {isFavorited ? (
        <Heart
          onClick={() => {
            startTransition(() => {
              FavoriteTagAction(imageData.public_id, false);
            });
          }}
          className=" absolute top-2 right-2 cursor-pointer fill-red-500 text-red-500"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              FavoriteTagAction(imageData.public_id, true);
            });
          }}
          className=" absolute top-2 right-2 cursor-pointer hover:text-red-500 duration-200"
        />
      )}
    </div>
  );
};

export default ImageCard;
