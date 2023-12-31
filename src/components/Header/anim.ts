const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
    initial: {
        opacity: 0
    }, 
    open: {
        opacity: 1,
        transition: { delay: 0.5, duration: 0.35}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
    }
}

export const opacityImage = {
    initial: {
        opacity: 0
    }, 
    open: {
        opacity: 1,
        transition: { duration: 0.35}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
    }
}

export const textOpacity = {
    initial: {
        opacity: 1
    },
    open: {
        opacity: 0.2,
        transition: {duration: 0.3}
    },
    closed: {
        opacity: 1,
        transition: {duration: 0.3}
    }
}

export const textHoverOverlay = {
    initial: {
        opacity: 0,
        y: '5%',
        x: 0
    },
    hover: {
        opacity: 1,
        y: '0%',
        x: '-5%',
        transition: {...transition, duration: 0.5}
    },
    off: {
        opacity: 0,
        y: '5%',
        x: 0,
        transition: {...transition, duration: 0.5}
    }
}

export const textHoverImage = {
    initial: {
        scale: 0
    },
    hover: {
        scale: 1,
        transition: {...transition, duration: 0.5}
    },
    off: {
        scale: 0,
        transition: {...transition, duration: 0.1}
    }
}

export const height = {
    initial: {
        height: 0,
    },
    enter: {
        height: '100vh',
        transition
    },
    exit: {
        height: 0,
        transition
    }
}

export const translate = {
    initial: {
        y: '150%'
    },
    enter: (i: number[]) => ({
        y: 0,
        transition: {...transition, delay: 0.2 + i[0] * 0.03}
    }),
    exit: (i: number[]) => ({
        y: '150%',
        transition: {...transition, duration: 0.7, delay: i[1] * 0.03}
    })
}

export const iconTranslate = {
    initial: {
        y: '150%'
    },
    enter: (i: number) => ({
        y: 0,
        transition: {...transition, delay: 0.8 + i * 0.05}
    }),
    exit: (i: number) => ({
        y: '150%',
        transition: {...transition, duration: 0.5, delay: i * 0.03}
    })
}

export const background = {
    initial: {
        height: 0
    },
    open: {
        height: '100vh',
        transition: {...transition, duration: 0.85}
    },
    closed: {
        height: 0,
        transition: {...transition, duration: 1.05}
    }
}
