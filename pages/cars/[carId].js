import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarsDetails from "@/components/templates/CarsDetails";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  return <CarsDetails {...carDetails} />;
}

export default CarDetail;
