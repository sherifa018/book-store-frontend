import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { SERVER_URL } from "../../config";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  console.log(book);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4">ShowBook</h1>

      <div className="border border-2 rounded rounded-xi p-4">
        <div className="my-4">
          {book.image && <img src={book.image} alt="" />}
        </div>
        <div className="my-4">
          <span className="border p-1 rounded mx-2"> Id</span>
          <span>{book._id}</span>
        </div>
        <div className="my-4">
          <span className="border p-1 rounded mx-2"> Title</span>
          <span>{book.title}</span>
        </div>
        <div className="my-4">
          <span className="border p-1 rounded mx-2"> Author</span>
          <span>{book.author}</span>
        </div>
        <div className="my-4">
          <span className="border p-1 rounded mx-2"> Publish Year</span>
          <span>{book.publishYear}</span>
        </div>
        <div className="my-4">
          <span className="border p-1 rounded mx-2"> Create Time</span>
          <span>{new Date(book.createdAt).toString()}</span>
        </div>
        <div className="my-4">
          <span className="border p-1 rounded mx-2"> Last Update Time</span>
          <span>{new Date(book.updatedAt).toString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
