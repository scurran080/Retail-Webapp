import React from 'react';
import { Card, Grid, Box, Typography, Container } from "@mui/material"
import PageCard from '../../components/PageCard';
import InventoryPageData from '../inventoryPage/InventoryPageData'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    boxStyle: {paddingTop: "15px"}
}))

const InventoryPage = () => {
    const classes = useStyles();
    return(
        <div>
            <Box m={4}>
                <Container>
                    <Grid container spacing={3}>
                        {InventoryPageData.map((data) => (
                            <Grid item key={data.id} xs={12} md={6} lg={6} >
                                <PageCard data={ data }/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default InventoryPage;