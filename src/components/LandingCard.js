import React from 'react';
import { Card, Typography, CardHeader, CardContent } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "175px",
    flexShrink: 0,
    margin: "auto",
    
  },
}));

const LandingCard = ({ data }) => {
    const classes = useStyles();
    return(
        <div>
            <Card elevation={3} classes = {{root: classes.card}}>
                <CardHeader title={data.header}></CardHeader>
                <CardContent>
                    <Typography variant='body2'>
                        {data.body}
                        <br></br>
                        <a href={data.link} style={{ textDecoration: "none", fontWeight: "bold"}}>{data.link}</a>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default LandingCard;