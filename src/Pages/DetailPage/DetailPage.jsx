import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./DetailPage.css";

const DetailPage = ({ match }) => {
  const [result, setResult] = useState({});

  const datadetailFetch = async () => {
    const { data } = await axios.get(
      `https:www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    );
    setResult(data.meals[0]);
  };
  const history = useHistory();
  const backHandler = () => {
    history.push("/");
  };
  useEffect(() => {
    datadetailFetch();
  }, []);
  return (
    <div>
      {result.strMealThumb && (
        <>
          <p className="back" onClick={backHandler}>
            {"<<Back To Home"}
          </p>
          <div className="detailWrapper">
            <img src={result.strMealThumb} alt="" className="detailsImg" />
            <div className="detailTextWrapper">
              <h2 className="detailTitle">{result.strMeal}</h2>
              <p className="detailIns">{result.strInstructions}</p>
              <div className="btnCtrl">
                <a href={result.strYoutube} className="cardBtn" target="_blank">
                  Watch Tutorial
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
