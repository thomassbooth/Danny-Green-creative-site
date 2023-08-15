import React from 'react'
import { motion } from 'framer-motion'

interface animatePhraseProps {
    phrase: Array<string>
    className: string
}

const animateVar = {
    initial: {y: '100%'},
    open: (i: number) => ({y: '0%',
        transition: {
            duration: 1,
            delay: 0.1 * i
        }
    })
}

const AnimatePhrase: React.FC<animatePhraseProps> = ({phrase, className}) => {
  return (
    <div className = {` ${className} flex flex-col item-center justify-center`}>
        {phrase.map((line, indx) => {
            return (
                <div key = {indx} className = 'overflow-hidden'>
                    <motion.p
                        custom = {indx}
                        variants = {animateVar}
                        initial = 'initial'
                        whileInView="open">
                        {line}
                    </motion.p>
                </div>
            )
        })}
    </div>
  )
}

export default AnimatePhrase