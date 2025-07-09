import type { JSX } from "react";
import { motion } from 'framer-motion'
import {containerVariants } from "../../constants/animation"
import {Description , HeroSectionProfile} from './index'

export const HeroSection =():JSX.Element =>{
    return (
        <div id='home' className="min-h-screen flex items-center pt-20">
            <motion.div
                className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Profile description component with personal information */}
                <Description
                    name={"Mehdi"}
                    family="Leylaei"
                    skils="React Developer & Frontend Developer"
                    info={"I developing and build beautiful websites and applications that help people and businesses grow online."}
                />
                <HeroSectionProfile/>
            </motion.div>
        </div>
    )
}
