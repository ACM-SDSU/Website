import { useEffect, useMemo, useRef, useState } from "react";

export default function BackgroundFX({ images, interval = 3000, fade = 2000 }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(() => images.map(() => false));
  const timerRef = useRef(null);

  // Preload all images once
  useEffect(() => {
    let mounted = true;
    images.forEach((src, i) => {
      const img = new Image();
      img.onload = () => mounted && setLoaded(prev => {
        const next = [...prev];
        next[i] = true;
        return next;
      });
      img.onerror = img.onload; // treat error as loaded to avoid stalling
      img.src = src;
    });
    return () => { mounted = false; };
  }, [images]);

  // Only advance to the next image if it's loaded
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (index + 1) % images.length;
      if (loaded[next]) {
        setIndex(next);
      }
      // if not loaded yet, skip this tick; we'll try again next interval
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [index, images.length, interval, loaded]);

  // Optional: start at the first loaded image to avoid initial flash
  const initialIndex = useMemo(() => loaded.findIndex(Boolean), [loaded]);

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none bg-black">
      {/* solid black base prevents any white flash */}
      <div className="absolute inset-0 bg-black" />

      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center ${
            // If nothing loaded yet, show nothing; once at least one is loaded,
            // show the chosen index.
            (loaded[i] && (i === index || (initialIndex === i && !loaded[index])))
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            transition: `opacity ${fade}ms ease-in-out`,
            willChange: "opacity",
          }}
        />
      ))}

      {/* readability overlay (keeps the vibe dark) */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
