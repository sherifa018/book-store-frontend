import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import BooksTable from "../components/home/BooksTable";
import { SERVER_URL } from "../../config";

const Home = () => {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("user");
  const navagiate = useNavigate();
  if (!token) {
    navagiate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navagiate("/");
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/books`)
      .then((res) => {
        console.log(res.data.data);

        setBooks(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container p-4">
      <div className="flex justify-between items-center">
        <h1 className="lead display-4 mt-5">Books List</h1>
        <Link to="/books/create">
          <FaPlus className="display-5" />
        </Link>
        <span className="mx-2">Welcome, {username}!</span>
        <button className="btn btn-primary my-3" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <BooksTable books={books} />
    </div>
  );
};

export default Home;
/**
 * 
 * 
 *  const config={
 *   
 * headers:{
 *  authorization:"Bearer " + token
 * }
 * }
 * 
 *   axios.post("http://createbook",{username:'abnet',password:123})
 * 
 * backen
 * 
 * const sampletokn= request.headers.authorization = Bearer ekljajfklasjklfjadsklhflads
 * 
 * 
 * 
 *   sampleToken.split(" ")[1]               ["bearer","skjfaklsjfkladsjaklf"]
 * 
 * 
 *  jwt.verify(token,secretkey)
 * 
 *const decoded= jwt.verify(skjfaklsjfkladsjaklf,abcdef)


 response.status(401).json({
 message:"Invalid token or expired token",

 data:eroor
 })


     

         decoded.userId
 * 
 * 
 * 
 * 
 * 
 */
