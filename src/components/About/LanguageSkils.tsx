import type {JSX} from 'react'
import { motion } from 'framer-motion'
import { languages } from '../../constants'

export const LanguageSkils = ():JSX.Element => {
  return (
    <div>
    {/* Section heading */}
    <h4 className="text-center text-2xl mb-8 font-bold">English</h4>

    {/* Language skills list */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {languages.map((item) => {
            return (
                <div key={item.id}>
                    {/* Skill label and percentage */}
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{item.language}</span>
                        <span className="text-gray-300">{item.grade}%</span>
                    </div>

                    {/* Background bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        {/* Animated foreground bar */}
                        <motion.div
                            className="bg-indigo-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.grade}%` }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: item.id * 0.2, // sequential animation
                            }}
                        />
                    </div>
                </div>
            )
        })}
    </div>
</div>
  )
}