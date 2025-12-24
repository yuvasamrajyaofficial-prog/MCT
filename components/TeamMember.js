"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";
import styles from "./TeamMember.module.css";

export default function TeamMember({ name, role, bio, image, socials = {}, delay = 0 }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          {image ? (
            <Image 
              src={image} 
              alt={name} 
              fill 
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.initials}>{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.bio}>{bio}</p>
        
        <div className={styles.socials}>
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          )}
          {socials.website && (
            <a href={socials.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
              <Globe size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
