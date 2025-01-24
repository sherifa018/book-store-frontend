import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="btn btn-primary bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <IoArrowBackCircle className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
