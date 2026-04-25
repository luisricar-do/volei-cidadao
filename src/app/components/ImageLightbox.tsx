import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { cn } from "@/app/components/ui/utils";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type ImageLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  /** Rótulo para leitores de tela; se omitido, usa `alt`. */
  title?: string;
};

export function ImageLightbox({
  open,
  onOpenChange,
  src,
  alt,
  title,
}: ImageLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "gap-0 border border-white/15 p-2 sm:p-4",
          "w-full max-w-[min(100vw-2rem,90rem)]",
          "bg-neutral-950/95 text-white",
          "shadow-2xl",
          "[&>button]:text-white [&>button]:ring-offset-neutral-950 [&>button]:hover:bg-white/10",
        )}
      >
        <DialogTitle className="sr-only">{title ?? alt}</DialogTitle>
        <div className="flex max-h-[85vh] w-full min-h-0 items-center justify-center overflow-hidden rounded-md pr-1 pt-1">
          <ImageWithFallback
            src={src}
            alt={alt}
            className="max-h-[85vh] w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
