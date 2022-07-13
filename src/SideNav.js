import React from "react";
import {Grid, Box, Typography, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {BrowserRouter as Router, Link, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import styles from "./Css/Ocean.module.css"
import HomeIcon from '@mui/icons-material/Home';

const SideNav = () => {
    let location = useLocation();
    const NavData = [
        {path: "/", name: "Dashboard", icon: <HomeIcon sx={location.pathname === "/" ? {color: "#ffffff"} : {color: "#0075ff"}}/>},
        {path: "/tables", name: "Tables", icon: <HomeIcon sx={location.pathname === "/tables" ? {color: "#ffffff"} : {color: "#0075ff"}}/>}
    ]

    // console.log("location", location.pathname)
    return (<>
        {/*<span className={location.pathname === "/tables" ? styles.headercon1 : styles.headercon2}>*/}
        <Grid container xl={12}  lg={0}>
            <Box sx={{
                m: "1rem"
            }}>

                <Grid item xl={12}>
                    <span className={styles.navTitleComponent}>
                        <Typography className={styles.navTitle}>VISION UI FREE</Typography>
                    </span>
                </Grid>

                <Divider className={styles.navRow}/>

                {
                    NavData.map((value, ind) => {

                        return (<>
                            <Grid item container xl={12} >
                                <Link className={styles.navText} to={value.path}>
                                    <Grid item xl={12}>
                                        <Box>
                                            <List sx={{p: 0}}>
                                                <ListItem className={value.path === location.pathname ? styles.pageTag : styles.pageTag2}>
                                                    <ListItemButton sx={{pt: 0, pb: 0, pl: 0}}>
                                                        <ListItemIcon sx={value.path === location.pathname ? {
                                                            color: "rgba(0, 0, 0, 0.54)",
                                                            flexShrink: "0",
                                                            background: "rgb(0, 117, 255)",
                                                            minWidth: "2rem",
                                                            minHeight: "2rem",
                                                            borderRadius: "0.75rem",
                                                            display: "grid",
                                                            placeItems: "center",
                                                            boxShadow: "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
                                                            transition: "margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                                        } : {
                                                            color: "rgba(0, 0, 0, 0.54)",
                                                            flexShrink: "0",
                                                            background: "rgb(26, 31, 55)",
                                                            minWidth: "2rem",
                                                            minHeight: "2rem",
                                                            borderRadius: "0.75rem",
                                                            display: "grid",
                                                            placeItems: "center",
                                                            boxShadow: "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
                                                            transition: "margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                                        }}>{
                                                            value.icon
                                                        }
                                                        </ListItemIcon>
                                                        <ListItemText className={styles.pageTagName} primary={value.name}/>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Grid>
                                </Link>
                            </Grid>
                        </>)
                    })
                }
            </Box>
        </Grid>
        {/*</span>*/}
    </>)
}
export default SideNav