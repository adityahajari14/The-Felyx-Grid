"use client";

import Image from "next/image";
import { useState } from "react";

function GalleryImage({
  alt,
  className = "",
  priority = false,
  src,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <Image
      alt={alt}
      className={`object-cover object-top ${className}`}
      fill
      priority={priority}
      sizes="(min-width: 1280px) 1304px, 100vw"
      src={src}
    />
  );
}

export function ProjectGallery({
  images,
  initialImage,
  projectName,
}: {
  images: string[];
  initialImage: string;
  projectName: string;
}) {
  const galleryImages = Array.from(new Set([initialImage, ...images]));
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <>
      <div className="mt-16 overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-black/40 lg:min-h-[696px]">
          <GalleryImage
            alt={`${projectName} featured project image`}
            className="brightness-[0.94] saturate-[0.94] transition duration-500"
            priority
            src={activeImage}
          />
        </div>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
        {galleryImages.map((image, index) => {
          const isActive = image === activeImage;

          return (
            <button
              aria-label={`Show ${projectName} image ${index + 1}`}
              aria-pressed={isActive}
              className={`group relative h-20 w-32 shrink-0 overflow-hidden rounded-[14px] border bg-black/40 transition duration-300 ${
                isActive
                  ? "border-brand opacity-100 shadow-[0_0_24px_rgba(195,0,2,0.22)]"
                  : "border-white/10 opacity-65 hover:border-brand/40 hover:opacity-100"
              }`}
              key={`${image}-${index}`}
              onClick={() => setActiveImage(image)}
              type="button"
            >
              <GalleryImage
                alt={`${projectName} thumbnail ${index + 1}`}
                className="brightness-[0.9] saturate-[0.9] transition duration-300 group-hover:scale-[1.04]"
                src={image}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
