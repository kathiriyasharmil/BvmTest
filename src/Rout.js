import React from "react";
import {Grid, Box, Typography} from "@mui/material";
import {BrowserRouter as Router, Link, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Header from "./Header";
import SideNav from "./SideNav";
import styles from "./Css/Ocean.module.css"
import Dashboard from "./Component/Dashboard";
import Tables from "./Component/Tables";

const Rout = () => {


    return (<>
        <Router>
            <Grid className={styles.sideNavMain}  sx={{width: "250px"}}>
                <SideNav/>
            </Grid>


            <Box sx={{ml: {xl: "250px", lg: "250px"},  p: "24px"}}>
                <Routes>
                    <Route exect path="/" element={<Dashboard/>}/>
                    <Route exect path="/tables" element={<Tables/>}/>
                </Routes>
            </Box>
        </Router>

    </>)
}
export default Rout