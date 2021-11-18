import React from "react";
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import PageCard from "./PageCard";
import InventoryPageData from "../pages/inventoryPage/InventoryPageData";

/**
 * TODO
 * Split this card into 2 sections,
 * on containing inventory action history and the other containing updates.
 * These will have to be added later after creating an API for them.
 */

const ActivityCard = () => {
  return (
    <div className="activity-card-wrapper">
      <div>
        <Card elevation={3}>
          <CardHeader title={'Testing123'}></CardHeader>
          <CardContent>
            <Typography variant="body2">
              This is testing the feed.
              <br></br>
              <a
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                this a test 123 123 123.
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


export default ActivityCard;