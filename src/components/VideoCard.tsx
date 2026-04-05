import { Video } from '../types';
import { motion } from 'motion/react';
import { Play, Clock } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#ef4444] transition-colors">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-medium text-white flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{video.title}</h3>
        <p className="text-slate-600 text-sm">{video.description}</p>
      </div>
    </motion.div>
  );
}
