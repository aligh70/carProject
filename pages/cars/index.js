import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
function AllCars() {
  return (
    <div>
        <CarsPage data={carsData} />
    </div>
  );
}

export default AllCars;
