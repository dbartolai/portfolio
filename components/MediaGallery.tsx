import type { MediaItem, VideoItem } from "@/types/content";

type MediaGalleryProps = {
  images?: MediaItem[];
  videos?: VideoItem[];
};

export function MediaGallery({ images = [], videos = [] }: MediaGalleryProps) {
  if (images.length === 0 && videos.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      {images.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-xl border border-foreground/10 bg-card">
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              <figcaption className="px-4 py-2 font-sans text-sm text-foreground/70">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {videos.length > 0 ? (
        <div className="grid gap-4">
          {videos.map((video) => (
            <div key={video.url} className="overflow-hidden rounded-xl border border-foreground/10 bg-card">
              <div className="aspect-video">
                {video.type === "embed" ? (
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video src={video.url} controls className="h-full w-full object-cover" />
                )}
              </div>
              <p className="px-4 py-2 font-sans text-sm text-foreground/70">{video.title}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
