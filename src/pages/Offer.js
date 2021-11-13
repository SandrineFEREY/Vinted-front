import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  //   const offerId = useParams();   {id: 5675765345636453698789}
  const { id } = useParams(); // console.log(id);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  //   mettre id dans les crochets parce qu'il peut changer

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="article">
      <img src={data.product_image.secure_url} alt="" />

      <div className="details">
        <span>{data.product_price}</span>

        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem);
          return (
            <div>
              <span>{keys[0]}</span>
              <span>{elem[keys[0]]}</span>
            </div>
          );
        })}
        <input className="bouton-achat" type="submit" value={"Acheter"} />
      </div>

      {/* <span>The product id is : {id}</span> */}
    </div>
  );
};

export default Offer;
