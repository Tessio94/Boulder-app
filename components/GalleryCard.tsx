"use client";

import { cardsGalleryVariants } from "@/lib/animation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const GalleryCard = ({ image }: { image: string }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      className="border-cards hover:shadow-cards-dark shadow-cards relative aspect-square cursor-pointer overflow-hidden rounded-2xl border-2 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      variants={cardsGalleryVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      ref={ref}
    >
      <Image src={image} alt="event one" fill className="object-cover" />
    </motion.div>
  );
};

export default GalleryCard;
