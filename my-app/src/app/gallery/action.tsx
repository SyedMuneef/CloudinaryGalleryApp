"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function FavoriteTagAction(
  publicId: string,
  isMarkAsfavorite: boolean
) {
  await cloudinary.v2.uploader.add_tag("favorite", [publicId]);

  if (isMarkAsfavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  revalidatePath("/gallery");
}
