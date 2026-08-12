import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videoHighlights = [
  "248474_medium.mp4",
  "167592-837412994_medium.mp4",
  "38618-418590096_medium.mp4",
  "65692-515098526_medium.mp4",
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
    const nextIndex = (activeIndex + 1) % videoHighlights.length;
    const previousIndex = (activeIndex - 1 + videoHighlights.length) % videoHighlights.length;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      const shouldPreload = index === activeIndex || index === nextIndex || index === previousIndex;
      video.preload = shouldPreload ? "auto" : "metadata";

      if (index === activeIndex) {
        video.muted = true;
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
        video.currentTime = 0;
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
          className={`absolute inset-0 size-full object-cover transform-gpu will-change-[opacity] transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          src={assetUrl(src)}
          muted
          loop
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          aria-hidden={index !== activeIndex}
          onCanPlay={(event) => {
            if (index === activeIndex) {
              event.currentTarget.muted = true;
              event.currentTarget.currentTime = 0;
              void event.currentTarget.play().catch(() => undefined);
            }
          }}
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
