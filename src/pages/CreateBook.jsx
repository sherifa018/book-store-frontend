import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [image, setimage] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setimage(reader.result);
        console.log(reader.result);
      };
    }
  };
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      image,
    };
    axios
      .post("https://book-store-backend-topaz-one.vercel.app/books", data)
      .then(() => {
        enqueueSnackbar("book Created successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1>Create Book</h1>
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
      <div className="my-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className=" mx-4 px-4 py-2"
        />
      </div>
      <button className="btn btn-primary btn-lg" onClick={handleSaveBook}>
        Save
      </button>
    </div>
  );
};

export default CreateBook;
