import Link from "next/link"

interface Text3DProps {
    primary: string
    secondary: string
}

const Text3D: React.FC<Text3DProps> = ({primary, secondary}) => {
  return (
    <Link href = '/' className = 'textContainer group transform transition-all duration-[0.4s] transform-style-3d hover:rotate-x-90 ml-6 text-[3vw] font-bold relative'>
        <p className = 'transform group-hover:translate-y-[-100%] group-hover:opacity-0 transition-all duration-[0.4s] primary m-0 text-white'>{primary}</p>
        <p className = 'transform translate-z-[-2.25vw] -rotate-x-90 group-hover:opacity-100 opacity-0 transition-all origin-bottom-center duration-[0.4s] m-0 absolute top-0'>{secondary}</p>
    </Link>
  )
}

export default Text3D