import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../config";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
      })
      .catch((error) => {
        alert("An error happened pls check console");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put("http://localhost:3000/books", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1>Edit Book</h1>
      <div className="my-4">
        <label className="mx-4">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mx-5 px-4 py-2"
        />
      </div>
      <div className="my-4">
        <label className="mx-4">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mx-4 px-4 py-2"
        />
      </div>
      <div className="my-4">
        <label className="mx-2">Publish Year</label>
        <input
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className=" mx-4 px-4 py-2"
        />
      </div>
      <button className="btn btn-primary btn-lg" onClick={handleEditBook}>
        Save
      </button>
    </div>
  );
};

export default EditBook;
