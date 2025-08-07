"use client";

import FlowerType from "@/types/flowerType";
import { Card, styled, Typography } from "@mui/material";
import Image from "next/image";

const width = 150;

interface ScrollXCardProps {
  flower: FlowerType;
}

const CardItem = styled(Card)(({}) => ({
  width: width,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: 8,
}));

export default function ScrollXCard(props: ScrollXCardProps) {
  return (
    <CardItem>
      <Image style={{ borderRadius: 4 }} src={props.flower.imageUrl} alt="" height={125} width={width} />
      <Typography variant="subtitle1" fontWeight={"bold"} textAlign={"center"}>
        {props.flower.name}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"} sx={{ marginTop: "auto" }}>
        {`${props.flower.price} ${props.flower.currency}`}
      </Typography>
    </CardItem>
  );
}
