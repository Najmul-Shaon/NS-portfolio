import { Link } from "react-router-dom";
import errorImage from "../../assets/404.gif";
import { GoHome } from "react-icons/go";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <figure className="w-1/2">
        <img src={errorImage} className="w-full" alt="" />
      </figure>
      <Link to="/">
        <button className="btn bg-primaryColor text-white border-borderColor rounded-xl">
          Back to Home{" "}
          <span className="text-xl">
            <GoHome />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
