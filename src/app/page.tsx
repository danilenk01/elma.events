import path from "path";
import fs from "fs";
import PhotoCarousel from "@/components/PhotoCarousel";

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

export default function Home() {
  const dirPath = path.join(process.cwd(), "public/photos");
  const images = fs
    .readdirSync(dirPath)
    .filter((f) => IMAGE_EXTENSIONS.test(f))
    .map((f) => `/photos/${f}`);

  return (
    <main>
      <PhotoCarousel images={images} />
    </main>
  );
}
