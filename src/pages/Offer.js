import { useParams } from "react-router-dom";

const Offer = () => {
  const { offerId } = useParams();

  return (
    <div>
      <h2>Offer</h2>
      <span>The product id is : {offerId}</span>
    </div>
  );
};

export default Offer;
