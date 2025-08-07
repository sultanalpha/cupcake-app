import CustomAppBar from "@/component/appbar/CustomAppBar";
import FlowerDetailsBody from "@/component/details/FlowerDetails";
import bouquetsData from "@/data/bouquetsData";
import { Typography } from "@mui/material";
import "../../app.css"

export default async function FlowerDetails({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const flower = bouquetsData.find((e) => e.id === Number(id));
  if (!flower) {
    return <InvalidId />;
  }

  return <FlowerDetailsBody flower={flower} />;
}

function InvalidId() {
  return (
    <>
      <CustomAppBar />
      <Typography color="error" fontWeight={"bold"} fontSize={32}>
        Invalid flower id
      </Typography>
    </>
  );
}
