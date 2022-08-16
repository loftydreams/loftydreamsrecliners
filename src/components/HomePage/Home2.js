import { useHistory } from "react-router-dom";
import { Home2Card } from "./Home2Card";

import "./Home2.css";

const Home2 = () => {
  const history = useHistory();

  return (
    <div className="home2-body">
      <h3> SHOP BY CATEGORIES</h3>
      <div className="home2-top">
        <div onClick={() => history.push("/living-room")}>
          <Home2Card
            src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2FLR-158-247x296.jpg?alt=media&token=bbcddbb1-b540-44c1-9e15-03a8cad4f64b"
            name="LIVING ROOM RECLINERS"
            qt="13 PRODUCTS"
          />
        </div>
        <div onClick={() => history.push("/home-theater")}>
          <Home2Card
            src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2FLofty-Dreams-Black-Home-Theater-Recliner-e1613484668369-247x296.jpg?alt=media&token=a08de8ac-dfb1-4c4b-ace2-54d39c429a72"
            name="HOME THEATER RECLINERS"
            qt="13 PRODUCTS"
          />
        </div>
        <div onClick={() => history.push("/lounger")}>
          <Home2Card
            src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2FRecliners-Manufacturer-by-Lofty-Dreams-Recliners-Pvt.-Ltd..jpg?alt=media&token=550900a1-3f90-4d84-8d7b-6e2a2897efdc"
            name="LOUNGER SOFA"
            qt="12 PRODUCTS"
          />
        </div>
      </div>
      <div className="home2-bottom">
        <div onClick={() => history.push("/chair")}>
          <Home2Card
            src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Arm%20Chair%2Flofty%20dreams%20arm%20chair%205.jpg?alt=media&token=073d7477-3e6a-4496-9969-4f2e1c967cd9"
            name="CHAIRS"
            qt="93 PRODUCTS"
          />
        </div>
        <div onClick={() => history.push("/riser")}>
          <Home2Card
            src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2FLofty-Dreams-Riser-Recliner-for-old-age-people-247x296.jpg?alt=media&token=cf679aca-99c8-4b5a-8925-edd1a4798ac5"
            name="RISER RECLINERS"
            qt="1 PRODUCT"
          />
        </div>
        <div onClick={() => history.push("/single-seater")}>
          <Home2Card
            src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2FLofty-Recliners-247x296.jpg?alt=media&token=a039a020-4444-414b-91ad-f50a02f42942"
            name="SINGLE SEATER RECLINERS"
            qt="56 PRODUCTS"
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;
