import { publicAsset } from "@/lib/public-path";

type ResponsivePictureProps = {
  baseName: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
};

export function ResponsivePicture({
  baseName,
  alt,
  width,
  height,
  className,
  eager = false,
}: ResponsivePictureProps) {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={`${publicAsset(`/images/${baseName}-640.webp`)} 640w, ${publicAsset(`/images/${baseName}-1200.webp`)} 1200w, ${publicAsset(`/images/${baseName}-1800.webp`)} 1800w`}
        sizes="(max-width: 48rem) 100vw, 56vw"
      />
      <img
        src={publicAsset(`/images/${baseName}-1200.webp`)}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
