"use client";

import { Button, Divider, styled, TextField, Typography } from "@mui/material";
import CustomAppBar from "../appbar/CustomAppBar";
import Image from "next/image";
import FlowerType from "@/types/flowerType";
import "./itemCount.css";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ScrollXDisplay from "../display/ScrollX/ScrollXDisplay";
import bouquetsData from "@/data/bouquetsData";

interface FlowerDetailsProps {
  flower: FlowerType;
}

const DetailsBody = styled("div")(({}) => ({
  width: "100%",
}));
export default function FlowerDetailsBody(props: FlowerDetailsProps) {
  const [count, setCount] = useState("1");
  return (
    <DetailsBody>
      <CustomAppBar />
      <div
        style={{
          margin: "8px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            borderRadius: "6px",
          }}
          src={props.flower.imageUrl}
          alt={props.flower.name}
          height={250}
          width={250}
        />
      </div>
      <Divider variant="middle" />
      <div
        style={{
          padding: "0px 8px",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          {props.flower.name}
        </Typography>
        <Typography variant="h5">{`${props.flower.price} ${props.flower.currency}`}</Typography>
      </div>
      <div
        style={{
          padding: "0px 12px",
          margin: "6px 0px",
        }}
      >
        <TextField label="Message card..." multiline fullWidth rows={4} />
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <ItemCount count={count} setCount={setCount} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6103A7",
            height: 30,
          }}
        >
          Add to cart
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6103A7",
            height: 30,
          }}
        >
          Buy now
        </Button>
      </div>
      <Divider variant="middle" />
      <ScrollXDisplay label="Similar bouquets" flowers={bouquetsData} />
    </DetailsBody>
  );
}
