import { Typography } from "@mui/material"
import { Box, styled } from "@mui/system"

export const GlobalBoxWrap = styled(Box)({
    width: "auto",
    height: "50%",
})

export const GlobalSubTitle = styled(Typography)({
    fontSize: "1.7rem",
    fontWeight: "700",
})


export const GlobalFade = styled(Box)({
        padding: "16px",
        margin: "16px",
        boxShadow: "0 0 8px rgba(0, 0, 0, .125)",
        height: "64px",
        opacity: 0,
        transform: "translate(0, 50%)",
        visibility: "hidden",
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
        willChange: "opacity, visibility"
})