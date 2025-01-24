import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th className="border">No</th>
          <th className="border">Title</th>
          <th className="border">Author</th>
          <th className="border">Publish Year</th>
          <th className="border">Operations</th>
          <th className="border"></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border">{index + 1}</td>
            <td className="border">{book.title}</td>
            <td className="border">{book.author}</td>
            <td className="border">{book.publishYear}</td>

            <td className="border">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <IoIosInformationCircleOutline className="mx-3" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <MdEdit className="mx-3" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdDeleteOutline className="mx-3" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
