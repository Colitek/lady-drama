import React, { useState, useEffect } from "react";

const galleryImages = [
  "images-webp/1.webp",
  "images-webp/2.webp",
  "images-webp/3.webp",
  "images-webp/4.webp",
  "images-webp/5.webp",
  "images-webp/6.webp"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const goNext = () => {
    if (selectedIndex < galleryImages.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goPrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "Escape") {
          setIsVisible(false);
          setTimeout(() => setSelectedIndex(null), 600);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <>
      <section id="gallery" className="py-20 px-6 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Galeria</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  className="object-cover w-full h-72 md:h-96 cursor-pointer transition duration-300 hover:opacity-80"
                  onClick={() => {
                    setSelectedIndex(index);
                    setTimeout(() => setIsVisible(true), 40);
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL Z PODGLĄDEM ZDJĘCIA */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setSelectedIndex(null), 600);
          }}
        >
          <img
            src={selectedImage}
            alt="Podgląd"
            className={`max-w-[90%] max-h-[90%] rounded-lg shadow-lg transform transition-transform duration-300 ${
              isVisible ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              if (clickX > rect.width / 2) {
                setSelectedIndex((prev) =>
                  prev === galleryImages.length - 1 ? 0 : prev + 1
                );
              } else {
                setSelectedIndex((prev) =>
                  prev === 0 ? galleryImages.length - 1 : prev - 1
                );
              }
            }}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      )}
    </>
  );
}
