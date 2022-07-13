import React, {useState, useEffect} from "react";
import Header from "../Header";
import {Grid, Box, Typography, List, ListItem, ListItemButton, CircularProgress} from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LanguageIcon from '@mui/icons-material/Language';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {BrowserRouter as Router} from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import styles from "../Css/Ocean.module.css"
import Div3 from "./Div3";
import "../Css/Ocn.css"
import Div4chart from "./Div4Chart";
import Div5Chart from "./Div5Chart";
import Table6 from "./Div6Table";
import Div7List from "./Div7List";
import Footer from "./Footer";

const Dashboard = () => {

    const Data = [
        {icon: <AccountBalanceWalletIcon sx={{fontSize: 15, color: "#ffffff"}}/>, title: "Users", details: "32,984"},
        {icon: <RocketLaunchIcon sx={{fontSize: 15, color: "#ffffff"}}/>, title: "Clicks", details: "2,42M"},
        {icon: <ShoppingCartIcon sx={{fontSize: 15, color: "#ffffff"}}/>, title: "Sales", details: "2,400$"},
        {icon: <BuildRoundedIcon sx={{fontSize: 15, color: "#ffffff"}}/>, title: "Items", details: "320"}
    ]

    return (<>
            <div className={styles.dashbordMain}>

                <Header/>

                <Grid style={{paddingTop: "70px"}}>

                    <Grid container spacing={3} columns={16}>

                        <Grid item xl={4} lg={4} md={8} xs={4}>
                            <Box sx={{
                                display: 'flex',
                                // '& > :not(style)': {
                                //     background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" +
                                //         " border-box",
                                // },
                            }}
                                 className={styles.dashbordBox1}>
                                <div>
                                    <Typography className={styles.dashbordBox1in1}>Today's Money</Typography>
                                    <Typography className={styles.dashbordBox1in1price}>$53,000 <span
                                        className={styles.dashbordBox1in1Id}>+55%</span></Typography>
                                </div>
                                <div>
                                    <List sx={{p: 0}}>
                                        <ListItem className={styles.DashbordTagIcon}>
                                            <ListItemButton sx={{pt: 0, pb: 0, pl: 0, pr: 0}}>
                                                <AccountBalanceWalletIcon/>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xl={4} lg={4} md={8} xs={4}>
                            <Box sx={{
                                display: 'flex',
                            }}
                                 className={styles.dashbordBox1}>
                                <div>
                                    <Typography className={styles.dashbordBox1in1}>Today's Users</Typography>
                                    <Typography className={styles.dashbordBox1in1price}>2,300 <span
                                        className={styles.dashbordBox1in1Id}>+3%</span></Typography>
                                </div>
                                <div>
                                    <List sx={{p: 0}}>
                                        <ListItem className={styles.DashbordTagIcon}>
                                            <ListItemButton sx={{pt: 0, pb: 0, pl: 0, pr: 0}}>
                                                <LanguageIcon/>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xl={4} lg={4} md={8} xs={4}>
                            <Box sx={{
                                display: 'flex',
                            }}
                                 className={styles.dashbordBox1}>
                                <div>
                                    <Typography className={styles.dashbordBox1in1}>New Clients</Typography>
                                    <Typography className={styles.dashbordBox1in1price}>+3,462 <span
                                        className={styles.dashbordBox1in1Id} style={{color: "#e31a1a"}}>-2%</span></Typography>
                                </div>
                                <div>
                                    <List sx={{p: 0}}>
                                        <ListItem className={styles.DashbordTagIcon}>
                                            <ListItemButton sx={{pt: 0, pb: 0, pl: 0, pr: 0}}>
                                                <InsertDriveFileIcon/>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xl={4} lg={4} md={8} xs={4}>
                            <Box sx={{
                                display: 'flex',
                            }}
                                 className={styles.dashbordBox1}>
                                <div>
                                    <Typography className={styles.dashbordBox1in1}>Total Sales</Typography>
                                    <Typography className={styles.dashbordBox1in1price}>$103,430 <span
                                        className={styles.dashbordBox1in1Id}>+5%</span></Typography>
                                </div>
                                <div>
                                    <List sx={{p: 0}}>
                                        <ListItem className={styles.DashbordTagIcon}>
                                            <ListItemButton sx={{pt: 0, pb: 0, pl: 0, pr: 0}}>
                                                <ShoppingCartIcon/>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </div>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container sx={{pt: 3}} spacing={3} columns={16}>
                        <Grid item xl={7} lg={4} md={8} xs={4}>
                            <Box className={styles.dashbordBox2}>
                                <Box>
                                    <Typography className={styles.dashbordBox2in1}>Welcome back,</Typography>
                                    <Typography className={styles.dashbordBox2in1name}>Mark Johnson</Typography>
                                    <Typography className={styles.dashbordBox2in1disc1}>Glad to see you again!</Typography>
                                    <Typography className={styles.dashbordBox2in1disc1}>Ask me anything.</Typography>
                                </Box>
                                <Typography sx={{display: "flex"}} className={styles.dashbordBox2in1tap}>Tap to
                                    record <ArrowForwardIcon/></Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={4} lg={4} md={8} xs={4}>
                            <Box className={styles.dashbordBox2in2}>
                                <Typography className={styles.dashbordBox2in2rate}>Satisfaction Rate</Typography>
                                <Typography className={styles.dashbordBox2in1from}>From all projects</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                                     className={styles.dashbordBox2in2circular}>
                                    <svg
                                        width="200"
                                        height="200"
                                        // position="relative"
                                        viewBox="0 0 200 200"
                                        color="#134698"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        overflow="visible"
                                    >
                                        <defs>
                                            <linearGradient id="spinner-secondHalf">
                                                <stop offset="0%" stop-opacity="0" stop-color="currentColor"/>
                                                <stop offset="100%" stop-opacity="0.5" stop-color="currentColor"/>
                                            </linearGradient>
                                            <linearGradient id="spinner-firstHalf">
                                                <stop offset="0%" stop-opacity="1" stop-color="currentColor"/>
                                                <stop offset="100%" stop-opacity="0.5" stop-color="currentColor"/>
                                            </linearGradient>
                                        </defs>

                                        <g stroke-width="8">
                                            <path stroke="url(#spinner-secondHalf)" stroke-width="15" d="M 4 100 A 96 96 0 0 1 196 100"/>
                                            <path stroke="url(#spinner-firstHalf)" stroke-width="15" d="M 196 100 A 96 96 0 0 1 4 100"/>


                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-width="15"
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

                                    <Box className={styles.circal1Box}>
                                        <EmojiEmotionsIcon sx={{fontSize: 30, color: "#ffffff"}}/>
                                    </Box>
                                </Box>

                                <Box className={styles.circal1BoxDisc}>
                                    <Typography className={styles.circal1BoxDisc1}>0%</Typography>
                                    <Typography className={styles.circal1BoxDisc2}>95%
                                        <Typography className={styles.circal1BoxDisc3}>Based on likes</Typography>
                                    </Typography>
                                    <Typography className={styles.circal1BoxDisc1}>100%</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xl={5} lg={4} md={8} xs={4}>
                            <Box className={styles.dashbordBox2in3}>

                                <Box display='flex' sx={{width: "100%", mb: "40px", alignItems: "center"}}>
                                    <Typography className={styles.dashbordBox3inheader}>Referral Tracking</Typography>
                                    <Typography>
                                        <Box className={styles.dashbordBox2in3inheader}><MoreHorizIcon sx={{color: "#0075ff"}}/></Box>
                                    </Typography>
                                </Box>

                                <Box display='flex' sx={{width: "100%"}} gridGap={2} className={styles.dashbordBox3inbox}>
                                    <Box sx={{width: "500px", maxWidth: "40%", marginRight: "auto", display: "flex", flexDirection: "column"}}>
                                        <Box className={styles.dashbordBox3inbox1}>
                                            <Typography className={styles.dashbordBox3inboxin1}>Invited</Typography>
                                            <Typography className={styles.dashbordBox3inboxin2}>145</Typography>
                                            <Typography className={styles.dashbordBox3inboxin2}>people</Typography>
                                        </Box>
                                        <Box sx={{margin: "20px 0px 0px"}} className={styles.dashbordBox3inbox1}>
                                            <Typography className={styles.dashbordBox3inboxin1}>Bonus</Typography>
                                            <Typography className={styles.dashbordBox3inboxin2}>1,465</Typography>
                                        </Box>
                                    </Box>
                                    <Div3/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container sx={{pt: 3}} spacing={3} columns={16}>
                        <Grid item xl={10} lg={4} md={8} xs={10}>
                            <Box className={styles.dashbordBox4}>
                                <Typography className={styles.dashbordBox4inheader}>Sales Overview</Typography>
                                <Typography className={styles.dashbordBox4inheader2}>+5% more<span
                                    className={styles.dashbordBox3inboxin1}> in 2021</span></Typography>

                                <Div4chart/>
                            </Box>
                        </Grid>

                        <Grid item xl={6} lg={4} md={8} xs={6}>
                            <Box sx={{
                                p: "22px"
                            }}
                                 className={styles.dashbordBox1}>
                                <Box sx={{
                                    mb: "24px", height: "220px", borderRadius: "20px"
                                }}
                                     className={styles.dashbordBox5}>
                                    <Div5Chart/>
                                </Box>
                                <Typography className={styles.dashbordBox5inheader}>Active Users</Typography>
                                <Typography className={styles.dashbordBox4inheader2} sx={{mb: "40px"}}>(+23) <span
                                    className={styles.dashbordBox3inboxin1}>than last week</span></Typography>

                                <Grid container spacing={3} columns={16}>
                                    {Data.map((value, index) => {
                                        return (
                                            <Grid item xl={4} lg={4} md={8} xs={4}>
                                                <Box>
                                                    <Box sx={{display: "flex", mb: 0.8}}>
                                                        <Box className={styles.dashbordBox4indetailIco}>
                                                            {value?.icon}
                                                        </Box>
                                                        <Typography className={styles.dashbordBox5inDataTitle}
                                                                    sx={{ml: {xl: 0.5}}}>{value?.title}</Typography>
                                                    </Box>
                                                    <Typography className={styles.dashbordBox5inDatadetails}>{value?.details}</Typography>
                                                    <LinearProgress variant="determinate" value={60}/>
                                                </Box>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container sx={{pt: 3, pb: 3}} spacing={3} columns={16}>
                        <Grid item xl={11} lg={4} md={8} xs={11}>
                            <Box sx={{p: "22px"}} className={styles.dashbordBox6}>
                                <Box className={styles.dashbordBox6header}>
                                    <Box>
                                        <Typography className={styles.dashbordBox5intitle}>Projects</Typography>
                                        <Box sx={{display: "flex", alignItems: "center"}}
                                             className={styles.dashbordBox6HeaderIco}><CheckCircleRoundedIcon
                                            sx={{color: "#008000", fontSize: 19, alignItems: "top"}}/>&nbsp;<Typography><strong>30
                                            done</strong><span> this month</span></Typography></Box>
                                    </Box>
                                    <MoreHorizRoundedIcon sx={{fontSize: 27}} className={styles.dashbordBox5inSide}/>
                                </Box>
                                <Table6/>
                            </Box>
                        </Grid>
                        <Grid item xl={5} lg={4} md={8} xs={5}>
                            <Box sx={{p: "22px"}} className={styles.dashbordBox1}>
                                <Div7List/>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
            <Footer/>
        </>
    )
}
export default Dashboard

// columns== create custom grid

// for circle https://www.benmvp.com/blog/how-to-create-circle-svg-gradient-loading-spinner/

