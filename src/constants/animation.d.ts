import type { Variants } from 'framer-motion';
export declare const pageVariants: Variants;
export declare const containerVariants: {
    hidden: {
        opacity: number;
    };
    visible: {
        opacity: number;
        transition: {
            when: string;
            staggerChildren: number;
        };
    };
};
export declare const textVariants: Variants;
export declare const buttonVariants: Variants;
export declare const imageVariants: Variants;
export declare const borderVariants: Variants;
