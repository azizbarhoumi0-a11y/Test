import { AwarenessImage } from '../types';
import { motion } from 'motion/react';

interface ImageGalleryProps {
  images: AwarenessImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
            <p className="text-white text-lg font-medium leading-relaxed italic">
              "{image.caption}"
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
