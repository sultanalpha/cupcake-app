"use client";

import CategoryType from "@/types/categoryType";
import { Card, styled, Typography } from "@mui/material";
import Image from "next/image";

interface CategoryCardProps {
  category: CategoryType;
}

const CardItem = styled(Card)(({ theme }) => ({
  width: 100,
  padding: "6px 2px",
  backgroundColor: "#7117B1",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function CategoryCard(props: CategoryCardProps) {
  return (
    <CardItem>
      <Image src={props.category.iconUrl} alt="" height={24} width={24} />
      <Typography variant="subtitle1" fontWeight={"bold"} textAlign={"center"}>
        {props.category.name}
      </Typography>
    </CardItem>
  );
}
