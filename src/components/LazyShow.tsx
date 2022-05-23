import React, { useEffect, useRef } from 'react'
import { createTheme } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import useOnScreen from '../hooks/useOnScreen'

interface LazyShowProps {
    children: any
}

const theme = createTheme({
    palette: {
        lazyShowDefault: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            margin: "20px",
            padding: "20px",
            fontSize: "1.5em"
        }
    }
})


const LazyShow: React.FC<LazyShowProps> = ({children}) => {
    const controls = useAnimation()
    const rootRef:any = useRef()
    const onScreen = useOnScreen(rootRef)

    useEffect(() => {
        if (onScreen) {
          controls.start({
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeIn"
            }
          });
        }
      }, [onScreen, controls]);
    return (
        <motion.div
        className={theme.palette.lazyShowDefault}
        ref={rootRef}
        initial={{ opacity: 0, x: -10 }}
        animate={controls}
        >
        {children}
        </motion.div>
    )
}

export default LazyShow