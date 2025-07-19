import type { JSX } from "react";
import {Header , HeroSection , About , Services, Portfolio, Testimonials, Contact, BackTop} from "./index"
import { motion } from "framer-motion";
import { pageVariants } from "../constants";
import { Blog } from "./Blog";

export default function LandingPage(): JSX.Element {
    return (
      <motion.div
        key="content"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="main-content"
      >
        <Header />

        <HeroSection />

        <About />

        <Services />

        {/* Portfolio/Work Showcase */}
        <Portfolio />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Blog/Articles Section */}
        <Blog />

        {/* Contact Form Section */}
        <Contact />

        <BackTop/>
      </motion.div>
    );
}