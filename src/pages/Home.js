const Home = ({ data }) => {
  return (
    <div className="container">
      <header>VINTED</header>

      <div className="products-container">
        {data.offers.map((elem, index) => {
          return (
            <div key={index} className="products">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
