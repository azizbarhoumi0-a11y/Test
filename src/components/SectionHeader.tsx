import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  id?: string;
}

export default function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold text-slate-900 mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-slate-600 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
