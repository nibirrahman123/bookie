import { useState } from "react"
import { getWishlistBookId } from "../../utilities/localStorage"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Wishlist = ({ sortData }) => {

  const [allData, setAllData] = useState([])

  const [wishlist, setWishlist] = useState([])
  // console.log(wishlist)

  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])


  useEffect(() => {
    const storedWishlistId = getWishlistBookId()
    // console.log(storedWishlistId)
    if (allData.length > 0) {
      let filteredArray = []
      for (let singleId of storedWishlistId) {
        const filter = allData.find(sData => sData.id == singleId)
        // console.log(filter)
        if (filter) {
          filteredArray = [...filteredArray, filter]
        }
      }
      setWishlist(filteredArray)
    }
  }, [allData])


  let sortWhichlist = []
  if (sortData === 'All' || sortData === '') {
    sortWhichlist = wishlist
  }
  else {
    sortWhichlist = wishlist.filter(list => list.category == sortData)
  }


  return (
    <div className="space-y-5">
      {
        sortWhichlist.map(info =>
          <div key={info.id} className="flex items-center border p-1 rounded-md gap-10">
            <img src={info.img} className="h-60 w-40 rounded-md border" />
            <div className="space-y-1">
              <h1>{info.title}</h1>
              <h1>{info.id}</h1>
              <h1>by : {info.author}</h1>
              <h1>Year Of Publishing : {info.year}</h1>
              <h1>pages : {info.pages}</h1>
              <h1>category : {info.category}</h1>
              <h1>ratings : {info.rating}</h1>
              <Link to={`/storedDetails/${info.id}`}><button className="btn btn-outline">View Details</button></Link>
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Wishlist