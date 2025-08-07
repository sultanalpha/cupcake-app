"use client";

import FlowerType from "@/types/flowerType";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import GridCard from "./GridCard";
import { Box, Button } from "@mui/material";

interface GridViewProps {
  label: string;
  flowers: FlowerType[];
}

const ItemsDiv = styled("div")(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  padding: 2,
  marginBottom: "8px",
}));

export default function GridDisplay(props: GridViewProps) {
  const displayedFlowers = props.flowers.slice(0, 6);
  return (
    <div
      style={{
        margin: "6px 0px",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} sx={{ margin: "0px 6px" }}>
        {props.label}
      </Typography>
      <ItemsDiv>
        {displayedFlowers.map((flower) => (
          <GridCard key={flower.id} flower={flower} />
        ))}
      </ItemsDiv>
      <Box textAlign={"center"}>
        <Button variant="outlined" color="secondary">
          See more
        </Button>
      </Box>
    </div>
  );
}
