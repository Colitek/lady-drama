import React from "react";

export default function Video() {
  return (
    <section className="video-container relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg absolute top-0 left-0 w-full h-full object-cover"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      />
      <div className="video-text absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">LADY DRAMA SHOW</h2>
        <p className="text-xl md:text-2xl mt-2 drop-shadow-lg">SPRING CHAPTER</p>
      </div>
    </section>
  );
}
