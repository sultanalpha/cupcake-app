"use client";

import FlowerType from "@/types/flowerType";
import { Button, Card, styled, Typography } from "@mui/material";
import Image from "next/image";

interface CustomOfferProps {
  flower: FlowerType;
}

const ItemsDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "block",
    height: "auto",
  },
  display: "flex",
  gap: 4,
  padding: 4,
  // backgroundColor: "#F4EFF1",
  margin: "8px",
  boxSizing: "border-box",
  height: "auto",
}));

const ImageBlock = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "200px",
  },
  width: "40%",
  height: "250px",
  position: "relative",
}));

export default function CustomOffer(props: CustomOfferProps) {
  return (
    <ItemsDiv>
      <ImageBlock>
        <Image  src={props.flower.imageUrl} alt="Flower Image" fill style={{ objectFit: "cover", borderRadius: 4 }} />
      </ImageBlock>
      <div style={{ padding: "0px 4px" }}>
        <Typography variant="h4" fontWeight={"bold"}>
          Create your own bouquet
        </Typography>
        <Typography variant="subtitle2" color="#5e5e5eff">
          With flowers are our inspiration to create best and fun memories. With very well beautiful picked flower.
        </Typography>
        <ul>
          <li>Hand picked just for you.</li>
          <li>Fresh beautiful flowers</li>
          <li>Many variants of flowers to choose</li>
          <li>Colorful flowers</li>
        </ul>
        <Button variant="contained" sx={{margin: "0px 20px 20px 20px"}}>Contact us</Button>
      </div>
    </ItemsDiv>
  );
}
