"use client";

import { Layout } from "@/components/layout";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formatCaption = (filename: string) => {
    // Remove IMG_ prefix and .jpg extension
    const date = filename.replace('IMG_', '').replace('.jpg', '');
    return `Photo ${date}`;
  };

  const images = [
    { src: "/gallery/IMG_5414.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_5238.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_5157.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_5119.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_5013.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4875.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4858.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4845.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4843.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4834.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4797.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4738.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4632.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4562.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4560.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4430.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4426.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_4312.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_3797.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_3459.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_3115.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_3078.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2682.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2603.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2318.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2145.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2137.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2118.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2106.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_2076.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1993.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1850.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1820.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1781.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1749.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1649.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1372.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1339.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1256.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1112.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1102.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_0964.jpg", alt: "Gallery Image" },
    { src: "/gallery/IMG_1108.jpg", alt: "Gallery Image" }
  ];

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4 animate-slide-up">
            Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-400 animate-slide-up stagger-1 opacity-0">
            my camera roll lol
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => {
            const caption = formatCaption(image.src.split('/').pop() || '');
            return (
              <div 
                key={idx}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] animate-slide-up opacity-0"
                onClick={() => setSelectedImage(image.src)}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">{caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl w-full h-[85vh] animate-slide-up">
              <Image
                src={selectedImage}
                alt="Full size preview"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors hover:rotate-90 duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 