import { Link } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";

const Book = ({ data }) => {
  const { id, title, rating, category, img, author } = data
  // console.log(data)
  return (
    <Link to={`/BookDetails/${id}`}>
      <div className="border border-gray-400 space-y-4 rounded-md text-2xl font-bold text-gray-600 p-5">
        <div className="flex items-center justify-center">
          <img src={img} className="h-72 w-48 rounded-md border" />
        </div>
        <div>
          <h2>{title}</h2>
          <h1>Author: {author}</h1>
          <div className="flex justify-between">
            <h1>{category}</h1>
            <div className="flex items-center gap-3">
              <FaRegStar />
              <h1>{rating}</h1>
            </div>
          </div>
        </div>

      </div>
    </Link>
  )
}
export default Book