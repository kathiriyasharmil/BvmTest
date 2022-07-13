import React from 'react';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, AvatarGroup, Avatar, Tooltip, Box} from "@mui/material";
import "../Css/Ocn.css"
import slack from "../assets/Slack_Mark.svg"
import spotify from "../assets/spotify.png"
import linkedIn from "../assets/linkedin.png"
import ios from "../assets/ios.png"
import windows from "../assets/windows.png"
import styles from "../Css/Ocean.module.css"
import Av1 from "../assets/avatar1.webp"
import Av2 from "../assets/avatar2.webp"
import Av3 from "../assets/avatar3.webp"
import Av4 from "../assets/avatar4.webp"
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";

function createData(compainesIcon, compainesName, membersImg, membersName, members, budget, completion) {
    return {compainesIcon, compainesName, membersImg, membersName, members, budget, completion};
}

const rows = [
    createData(<img src="https://img.icons8.com/color/48/000000/adobe-xd--v1.png"
                    width="30px"/>, "Chakra Vision UI Version", [Av1, Av2, Av3, Av4], ["Ryan Tompson", "Romina Hadid", "Alexander Smith", "Jessica Doe"], "$14,000", 60),
    createData(<img src={slack}
                    width="40px"/>, "Add Progress Track", [Av2, Av4], ["Romina Hadid", "Jessica Doe"], "$3,000", 10),
    createData(<img src={ios}
                    width="30px"/>, "Fix Platform Errors", [Av1, Av3,], ["Ryan Tompson", "Alexander Smith",], "Not set", 100),
    createData(<img src={spotify}
                    width="30px"/>, "Launch our Mobile App", [Av4, Av3, Av2, Av1], ["Jessica Doe", "Alexander Smith", "Romina Hadid", "Ryan Tompson",], "$20,500", 100),
    createData(<img src={windows}
                    width="30px"/>, "Add the New Pricing Page", [Av4], ["Jessica Doe"], "$500", 25),
    createData(<img src={linkedIn}
                    width="30px"/>, "Redesign New Online Shop", [Av1, Av4], ["Ryan Tompson", "Jessica Doe"], "$2,000", 40),
];

const Table6 = () => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: "100%", color: "white"}} size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.thead} sx={{pl: 0}}>COMPANIES</TableCell>
                            <TableCell align="right" className={styles.thead}>MEMBERS</TableCell>
                            <TableCell align="center" className={styles.thead}>BUDGET</TableCell>
                            <TableCell align="center" className={styles.thead}>COMPLETION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => {
                            console.log("row?.budget", row?.budget)
                            return (
                                <TableRow hover
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell className={styles.tableCell} display="flex">
                                        {row?.compainesIcon}<span className={styles.tableCellName}>{row?.compainesName}</span>
                                    </TableCell>
                                    <TableCell align="right" className={styles.tableCell}>
                                        <AvatarGroup sx={{justifyContent: "left"}}>
                                            {row?.membersImg?.map((vlaImg, ind) => {
                                                return (
                                                    <Tooltip sx={{backgroundColor: "red"}} title={row.membersName[ind]} arrow>
                                                        <Avatar sx={{width: 24, height: 24}} alt={row.membersName[ind]} src={vlaImg}/>
                                                    </Tooltip>
                                                )
                                            })}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="center" className={styles.tableCell}>{row?.members}</TableCell>
                                    <TableCell align="center" className={styles.tableCell}>{row?.budget}%
                                        <Box sx={{width: "90%"}}>
                                            <LinearProgress variant="determinate" value={row.budget}/>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Table6;

// https://icons8.com/icons/set/in--pink
