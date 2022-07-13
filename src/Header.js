import React, {useEffect, useState} from "react";
import {Grid, Box, Paper, Typography, Input, InputAdornment} from "@mui/material";
import {BrowserRouter as Router, useLocation} from "react-router-dom";
import styles from "./Css/Ocean.module.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Css/Ocn.css"

const Header = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    let location = useLocation();

    const answer_array = location?.pathname.split('/');
    return (<>
        {/*<span className={location.pathname === "/tables" ? styles.headercon1 : styles.headercon2}>*/}
        <Grid>

            <Box
                className={styles.headerBox}
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        height: "max-content",
                        ml: "250px",
                        borderRadius: "20px",
                        mr: "28px",
                    },
                }}
            >
                <Paper sx={{width: {xl: "80%", lg: "79%"}}} className={clientWindowHeight < 16 ? styles.headerBoxPaper : styles.headerBoxShadow}>
                    <Grid container item xl={12} display="flex"
                          sx={{justifyContent: 'space-between', pt: "0.25rem", pr: "1rem", pb: "0.25rem", pl: "1rem"}}>

                        <Grid item xl={2}>
                            <Typography sx={{color: "#ffff"}} display="flex">
                                <HomeIcon sx={{fontSize: 18}} fontSize='medium' className={styles.headerHome}/>&nbsp;
                                <span>/</span>&nbsp;&nbsp;
                                <span className={styles.header1path}>{answer_array[1] === "" ? "Dashboard" : answer_array[1]}</span>
                            </Typography>
                            <Typography className={styles.header1path} sx={{
                                color: "#ffff",
                                lineHeight: "1.625",
                                fontWeight: "700",
                            }}>{answer_array[1] === "" ? "Dashboard" : answer_array[1]}</Typography>

                        </Grid>

                        <Grid item xl={4} display="flex" alignItems="center">
                            <Input
                                sx={{
                                    border: "0.0625rem solid rgba(226, 232, 240, 0.3)",
                                    borderRadius: "0.9375rem",
                                    backgroundColor: "rgb(15, 21, 53) !important",
                                    color: "#ffff",
                                    p: 0.2,
                                    height: "max-content",
                                }}
                                id="input-with-icon-adornment"
                                multiline={false}
                                placeholder="Type here..."
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{color: "#718096", p: 1}}/>
                                    </InputAdornment>
                                }
                            />

                            <Typography sx={{color: "#ffff"}} display="flex" alignItems="center"> &nbsp;&nbsp;&nbsp;<AccountCircleIcon
                                sx={{fontSize: 20,}}/>&nbsp;Sign in</Typography>
                            <Typography sx={{color: "#ffff"}} display="flex" alignItems="center"> &nbsp;&nbsp;<SettingsIcon
                                sx={{fontSize: 20}}/>&nbsp;&nbsp;
                                <NotificationsIcon sx={{fontSize: 20}}/></Typography>
                        </Grid>
                    </Grid>

                </Paper>
            </Box>

        </Grid>
        {/*</span>*/}
    </>)
}
export default Header