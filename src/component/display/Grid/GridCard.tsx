import FlowerType from "@/types/flowerType";
import { styled, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";

interface GridCardProps {
  flower: FlowerType;
}

const CardItem = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flex: "0 0 calc(50% - 3px)",
  },
  [theme.breakpoints.between("sm", "md")]: {
    flex: "0 0 calc(33.333% - 4px)",
  },
  flex: "0 0 calc(25% - 4.5px)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  padding: 8,
}));

export default function GridCard(props: GridCardProps) {
  return (
    <CardItem>
      <div style={{ position: "relative", width: "100%", aspectRatio: "150/125" }}>
        <Image style={{ borderRadius: 4, objectFit: "cover" }} src={props.flower.imageUrl} alt={props.flower.name} fill />
      </div>
      <Typography variant="subtitle1" fontWeight={"bold"} textAlign={"center"}>
        {props.flower.name}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"} sx={{ marginTop: "auto" }}>
        {`${props.flower.price} ${props.flower.currency}`}
      </Typography>
    </CardItem>
  );
}
