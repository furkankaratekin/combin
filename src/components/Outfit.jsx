import "/src/App.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Outfit({ img, title, desc }) {
  return (
    <div className="max-w-sm  ">
      <Link to="/content">
        <img className="w-full" src={img} alt="" />
      </Link>

      <div className="p-5">

          <Link to="/content">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              KOMBİN
            </h5>
          </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          AÇIKLAMA KOMBİN
        </p>
      </div>
    </div>
  );
}

export default Outfit;
