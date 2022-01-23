import { useState, useEffect } from "react";
import { Card, Typography, LinearProgress } from "@mui/material";

const CustomCard = ({
  id,
  title,
  total,
  target,
  data,
  cardLevels,
  levIndex,
  updateLevels,
}) => {
  const percentage = parseInt((total / target) * 100);
  return (
    <Card
      style={{
        width: "340px",
        height: "160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        boxShadow: "0px 0px 5px 2px rgb(0,0,0,0.3)",
      }}
      onClick={() => {
        console.log("clicked");
        let len = cardLevels.length;
        const curr = [...cardLevels];
        curr.splice(levIndex + 1, len - levIndex - 1);

        const newLevel = [];
        data.forEach((el) => {
          if (el.parent == id) newLevel.push(el);
        });
        curr.push(newLevel);

        updateLevels(curr);
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography style={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography>
          <b>{percentage}%</b> complete
        </Typography>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <Typography style={{ fontWeight: "bold" }}>
              Total Sales - {total} Crore
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              Target Sales - {target} Crore
            </Typography>
          </div>
          <div
            style={{
              color: "gold",
              backgroundColor: "rgb(255, 239, 219)",
              fontWeight: "bold",
              padding: "10px 15px",
            }}
          >
            Off Track
          </div>
        </div>
        <LinearProgress
          variant="determinate"
          value={percentage}
          style={{ height: "10px", borderRadius: "5px" }}
        />
      </div>
    </Card>
  );
};

export default CustomCard;
