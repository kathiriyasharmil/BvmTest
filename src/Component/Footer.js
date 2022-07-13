import React from 'react';
import {Grid, Box, Typography, List, ListItem, ListItemButton, CircularProgress} from "@mui/material";
import styles from "../Css/Ocean.module.css"

const Footer = () => {
    return (
        <footer>
            <Box display="flex" sx={{flexDirection: {xl: 'row'}, justifyContent: {xl: "space-between"}, pt: "16px"}}>
                <Box>
                    <Typography><span className={styles.footerLeft}>@ 2021, Made with </span> ❤️ <span className={styles.footerLeft}> by Simmmple&Creative Timfor a better web</span></Typography>
                </Box>
                <Box display="flex" sx={{mb: "24px"}} className={styles.footerRight}>
                    <Typography sx={{mr: {xl: "46px"}}}>Marketplace</Typography>
                    <Typography sx={{mr: {xl: "46px"}}}>Blog</Typography>
                    <Typography>License</Typography>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
