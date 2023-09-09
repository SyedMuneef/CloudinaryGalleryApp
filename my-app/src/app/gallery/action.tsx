"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";

export async function FavoriteTagAction(
  publicId: string,
  isMarkAsfavorite: boolean,
  path: string
) {
  await cloudinary.v2.uploader.add_tag("favorite", [publicId]);

  if (isMarkAsfavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000))
  revalidatePath(path);
}
