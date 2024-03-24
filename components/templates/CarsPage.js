import Card from "../module/Card";
import style from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={style.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;
