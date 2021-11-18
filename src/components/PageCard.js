import React from 'react';
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardStyle: {
    height: '', 
    width: 'auto',
    display: 'flex'}
}));

const PageCard = ({ data }) => {
    const classes = useStyles();
    return(
        <div>
            <Card classes={{root: classes.cardStyle}} elevation={3}>
                <CardHeader title={data.header}></CardHeader>
                <CardContent>
                    <Typography variant='body2'>
                        {data.body}
                        <br></br>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default PageCard;