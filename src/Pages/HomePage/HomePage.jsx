import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./HomePage.css";
import Heading from "../../components/Heading/Heading";

function HomePage() {
  const [result, setResult] = useState([]);

  const dataFetch = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
    );
    setResult(data.meals);
  };
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <>
      <Heading>Food Find With Us</Heading>
      <div className="cardsWrapper">
        {result.map((data) => (
          <Card
            key={data.idMeal}
            title={data.strMeal}
            imageUrl={data.strMealThumb}
            id={data.idMeal}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default HomePage;
