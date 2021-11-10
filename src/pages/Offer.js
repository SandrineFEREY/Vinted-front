import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Offer</h2>
      <span>The product id is : {id}</span>
    </div>
  );
};

export default Offer;
