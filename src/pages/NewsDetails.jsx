import { useParams } from "react-router-dom";
import { data } from "../components/News/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const NewsDetails = () => {
  let { id } = useParams();
  const product = data.find((product) => String(product.id) === id);

  return (
    <>
      <Navbar />
      <section key={id} className="details-section">
        <img src={product.image} alt=""></img>
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsDetails;
