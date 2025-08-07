"use client";

import FlowerType from "@/types/flowerType";
import { Card, styled, Typography } from "@mui/material";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";

interface SpecailDisplayProps {
  bgUrl: string;
  flower: FlowerType;
  slides: number[];
  options?: EmblaOptionsType;
}

const ImageBlock = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "400px",
  },
  width: "100%",
  height: "500px",
  position: "relative",
  margin: "24px 0px 64px 0px",
}));

const CardContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  position: "absolute",
  top: "40%",
  backgroundColor: "transparent",
  height: 400,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: 16,
  boxSizing: "border-box",
}));

const MobileCardContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  position: "absolute",
  top: "50%",
  backgroundColor: "transparent",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CardBlock = styled(Card)(({}) => ({
  height: "75%",
  width: "30%",
  backgroundColor: "white",
}));

export default function SpecialDisplay(props: SpecailDisplayProps) {
  return (
    <ImageBlock>
      <Image
        src={props.bgUrl}
        alt=""
        fill
        style={{
          objectFit: "cover",
          maskImage: `linear-gradient(to bottom, 
    black 0%, 
    black 70%, 
    transparent 100%);`,
        }}
      />
      <Typography
        variant="h3"
        fontWeight={"bold"}
        color="#1d1d1dff"
        sx={{
          position: "absolute",
          top: "34%",
          transform: "translateY(-50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        Our cool wedding choises
      </Typography>
      <CardContainer>
        <CardBlock></CardBlock>
        <CardBlock></CardBlock>
        <CardBlock></CardBlock>
      </CardContainer>
      <MobileCardContainer>
        <EmblaCarousel slides={props.slides} options={props.options} />
      </MobileCardContainer>
    </ImageBlock>
  );
}
