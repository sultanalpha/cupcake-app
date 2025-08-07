"use client";

import FlowerType from "@/types/flowerType";
import { styled, Typography } from "@mui/material";
import ScrollXCard from "./ScrollXCard";

interface ScrollXDisplayProps {
  label: string;
  flowers: FlowerType[];
}

const ItemsDiv = styled("div")(({}) => ({
  display: "flex",
  gap: 6,
  padding: 2,
  overflowX: "auto",
  marginBottom: "8px",
  "& > *": {
    flexShrink: 0,
  },
}));

export default function ScrollXDisplay(props: ScrollXDisplayProps) {
  return (
    <div>
      <Typography variant="h5" fontWeight={"bold"} sx={{ margin: "0px 6px" }}>
        {props.label}
      </Typography>
      <ItemsDiv>
        {props.flowers.map((flower) => (
          <ScrollXCard key={flower.id} flower={flower} />
        ))}
      </ItemsDiv>
    </div>
  );
}
