import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videoHighlights = [
  "istockphoto-1448707060-640_adpp_is.mp4",
  "istockphoto-2160987749-640_adpp_is.mp4",
  "istockphoto-2199325479-640_adpp_is.mp4",
  "istockphoto-2269313532-640_adpp_is.mp4",
  "istockphoto-2244462602-640_adpp_is.mp4",
  "istockphoto-640247158-640_adpp_is.mp4",
  "istockphoto-477032140-640_adpp_is.mp4",
  "istockphoto-1141365940-640_adpp_is.mp4",
];

const assetUrl = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % videoHighlights.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.muted = true;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const goTo = (index: number) => {
    setActiveIndex((index + videoHighlights.length) % videoHighlights.length);
  };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Balaji video highlights"
    >
      {videoHighlights.map((src, index) => (
        <video
          key={src}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          src={assetUrl(src)}
          muted
          loop
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          aria-hidden={index !== activeIndex}
        />
      ))}

      <button
        type="button"
        onClick={() => goTo(activeIndex - 1)}
        className="absolute left-4 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-card/40 bg-card/20 text-overlay-foreground backdrop-blur-sm transition hover:bg-card/40"
        aria-label="Previous video"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(activeIndex + 1)}
        className="absolute right-4 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-card/40 bg-card/20 text-overlay-foreground backdrop-blur-sm transition hover:bg-card/40"
        aria-label="Next video"
      >
        <ArrowRight className="size-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {videoHighlights.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-card" : "w-2 bg-card/50 hover:bg-card/80"
            }`}
            aria-label={`Go to video ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
