import styles from "../Css/Ocean.module.css";
import {Box, Typography} from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Xd from "../assets/adobe-xd.png"
import dropbox from "../assets/dropbox.png"
import css from "../assets/css.png"
import React from "react";

const Div7List = () => {

    function createList(img, title, time) {
        return {img, title, time}
    }

    const Data = [
        createList(<NotificationsIcon sx={{fontSize: 20, color: "#0075ff"}}/>, "$2400, Design changes", "22 DEC 7:20 PM"),
        createList(<img src={css} width="20px" height="20px"/>, "New order #1832412", "21 DEC 11 PM"),
        createList(<ShoppingCartIcon sx={{fontSize: 20, color: "#4299e1"}}/>, "Server payments for April", "21 DEC 9:34 PM"),
        createList(<CreditCardIcon sx={{fontSize: 20, color: "#ffb547"}}/>, "New card added for order #4395133", "20 DEC 2:20 AM"),
        createList(<img src={dropbox}  width="20px" height="20px"/>, "New card added for order #4395133", "18 DEC 4:54 AM"),
        createList(<img src={Xd}  width="20px" height="20px"/>, "New order #9583120", "17 DEC"),
    ]
    return (<>
        <Box className={styles.dashbordBox6header}>
            <Box>
                <Typography className={styles.dashbordBox7intitle}>Orders overview</Typography>
                <Box sx={{display: "flex", alignItems: "center"}}
                     className={styles.dashbordBox6HeaderIco}><CheckCircleRoundedIcon
                    sx={{color: "#008000", fontSize: 19, alignItems: "top"}}/>&nbsp;<Typography><strong>30
                    done</strong><span> this month</span></Typography></Box>
            </Box>
        </Box>

        {Data?.map((value, ind) => {
            return (<>
                <Box display="flex" sx={{mb: "24px"}}>
                    {value?.img}
                    <Typography className={styles.DashbordDiv7intitle}>{value?.title}
                        <Typography className={styles.DashbordDiv7intime}>{value?.time}</Typography>
                    </Typography>
                </Box>
            </>)
        })
        }

    </>)
}
export default Div7List