import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="container">
      <header>VINTED</header>

      <div className="products-container">
        {data.offers.map((elem, index) => {
          return (
            <div key={index} className="products">
              <Link to={`/offer/${elem._id}`}>
                Offer
                <div>
                  <img src={elem.product_image.url} alt="" />
                </div>
                <p>{elem.product_price}</p>
                {elem.product_details.map((elem2, index) => {
                  return (
                    <div key={index}>
                      <p>{elem2.TAILLE}</p>
                      <p>{elem2.MARQUE}</p>
                    </div>
                  );
                })}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
