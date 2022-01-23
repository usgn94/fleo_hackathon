import { useState, useEffect } from "react";
import { Card, Typography, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";

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
  let hColor =
    percentage <= 33
      ? "rgb(255,0,0)"
      : percentage <= 66
      ? "rgb(255, 215, 0)"
      : "rgb(0,128,0)";

  let bgColor = hColor.split(")")[0] + ", 0.2)";

  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiLinearProgress-colorPrimary": {
        backgroundColor: hColor,
      },
      "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: hColor,
      },
    },
  }));
  const classes = useStyles();

  return (
    <Card
      style={{
        width: "300px",
        height: "160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        margin: "20px",
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
              color: hColor,
              backgroundColor: bgColor,
              fontWeight: "bold",
              padding: "6px 15px",
            }}
          >
            {percentage <= 33
              ? "At Risk"
              : percentage <= 66
              ? "Off Track"
              : "On Track"}
          </div>
        </div>
        <LinearProgress
          variant="determinate"
          value={percentage}
          className={classes.root}
          style={{
            height: "12px",
            borderRadius: "6px",
            backgroundColor: bgColor,
            margin: "10px 0px 6px 0px",
          }}
        />
      </div>
    </Card>
  );
};

export default CustomCard;
