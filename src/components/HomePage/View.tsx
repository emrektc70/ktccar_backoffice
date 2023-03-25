import MenuBar from "../MenuBar/View";
import "./styles.scss";
import bmw from "./assets/bmw.png";
import BoxHome from "../componentsktccar/BoxHome/View";

const homePage = () => {
  return (
    <div className="home">
      <MenuBar />
      <div className="contentpage">
        <div className="textContent">
          <div className="textStyle">
            <h2 className="TextTitle">KTC CAR</h2>
            <h3>KTC CAR, site pour les passionnés d'automobiles.</h3>
          </div>
          <div className="buttonRedirection">Cliquer ici</div>
        </div>
        <div className="imageDetails">
          <img className="image" src={bmw} alt="image" />
        </div>
      </div>
      <div className="containerBox">
      <BoxHome/>
      </div>
    </div>
  );
};
export default homePage;
