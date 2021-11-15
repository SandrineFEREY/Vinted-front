import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("picture", file);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData
        // // {
        // //   headers: {
        // //     authorization: `bear ${token}`,
        // //   },
        // }
      );

      setData(response.data);

      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish">
      <h2>Vends ton article</h2>
      <div className="fiche">
        {data && <img src={data.secure_url} alt="" />}
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => setFile(event.target.files[0])}
            type="file"
          />
          <div>
            <p>Titre</p>
            <input
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              placeholder="ex: chemise ample Zara"
              value={title}
            />
            <p>Décris ton article</p>
            <input type="text" placeholder="ex: chemise satinée" />
          </div>
          <div>
            <p>Marque</p>
            <input type="text" placeholder="ex: Marque Zara" />
            <p>Taille</p>
            <input type="text" placeholder="ex: medium" />
            <p>Couleur</p>
            <input type="text" placeholder="ex: blanche" />
            <p>Etat</p>
            <input type="text" placeholder="ex: Neuve ave étiquette" />
            <p>Lieu</p>
            <input type="text" placeholder="ex: Paris 18e" />
          </div>
          <div>
            <p>Prix</p>
            <input type="text" placeholder="10 Euros" />
          </div>
          <input
            className="bouton-ajouter"
            type="submit"
            value={"Ajouter"}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Publish;
