const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
    initial: {
        opacity: 0
    }, 
    open: {
        opacity: 1,
        transition: {duration: 0.35}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
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
        y: '100%'
    },
    enter: (i: number[]) => ({
        y: 0,
        transition: {...transition, delay: 0.2 + i[0] * 0.03}
    }),
    exit: (i: number[]) => ({
        y: '100%',
        transition: {...transition, duration: 0.7, delay: i[1] * 0.03}
    })
}

export const background = {
    initial: {
        height: 0
    },
    open: {
        height: '100vh',
        transition: {...transition, duration: 0.9}
    },
    closed: {
        height: 0,
        transition: {...transition, duration: 1.1}
    }
}