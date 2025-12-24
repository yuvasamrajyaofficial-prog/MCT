"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import styles from "./Blogs.module.css";

export default function BlogsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Insights & <span className="text-gradient">Innovations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Exploring the intersection of AI, human potential, and the digital enlightenment.
          </motion.p>
        </div>
      </section>

      <section className={styles.blogGrid}>
        <div className="container">
          <div className={styles.grid}>
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.card}
              >
                <div className={styles.cardContent}>
                  <span className={styles.category}>{post.category}</span>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.footer}>
                    <span className={styles.date}>{post.date}</span>
                    <Link href={`/blogs/${post.slug}`} className={styles.readMore}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
