"use client";

import CategoryType from "@/types/categoryType";
import { styled, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
interface CategoryDisplayProps {
  label: string;
  categories: CategoryType[];
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

export default function CategoryDisplay(props: CategoryDisplayProps) {
  return (
    <div>
      <Typography variant="h5" fontWeight={"bold"} sx={{ margin: "0px 6px" }}>
        {props.label}
      </Typography>
      <ItemsDiv>
        {props.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ItemsDiv>
    </div>
  );
}
