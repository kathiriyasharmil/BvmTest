import React from 'react';
import styles from "../Css/Ocean.module.css";
import {Box, Typography} from "@mui/material";

const Div3 = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center"
            }}
                 className={styles.dashbordBox3in3circular}>
                <svg
                    width="180"
                    height="180"
                    // position="relative"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    overflow="visible"
                    color="#134698"
                >
                    <defs>
                        <linearGradient id="circle-progress-inner">
                            <stop offset="0%" stopOpacity="0" stopColor="currentColor"/>
                            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor"/>
                        </linearGradient>
                        <linearGradient id="spinner-firstHalf">
                            <stop offset="0%" stopOpacity="1" stopColor="currentColor"/>
                            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor"/>
                        </linearGradient>
                    </defs>

                    <g strokeWidth="8">
                        <path stroke="url(#spinner-secondHalf)" strokeWidth="15" d="M 4 100 A 96 96 0 0 1 196 100"/>
                        <path stroke="url(#spinner-firstHalf)" strokeWidth="15" d="M 196 100 A 96 96 0 0 1 4 100"/>
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="15"
                            d="M 4 100 A 96 96 0 0 1 4 98"
                        />
                    </g>

                    <animateTransform
                        from="0 0 0"
                        to="360 0 0"
                        attributeName="transform"
                        type="rotate"
                        // repeatCount="indefinite"
                        dur="1300ms"
                    />
                </svg>

                <Box className={styles.circal2Box}>
                    <Typography className={styles.dashbordBox3in21}>Safety</Typography>
                    <Typography sx={{fontSize: "32px"}} className={styles.dashbordBox3in22}>9.3</Typography>
                    <Typography className={styles.dashbordBox3in21}>Total Score</Typography>
                </Box>
            </Box>
        </>
    );
};

export default Div3;
