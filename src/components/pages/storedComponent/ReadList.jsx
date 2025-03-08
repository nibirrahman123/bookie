import { useEffect, useState } from "react"
import { getStoredReadBookId } from "../../utilities/localStorage"
import { Link } from "react-router-dom"

const ReadList = ({sortData}) => {
  const [allData, setAllData] = useState([])
  const [readList, setReadList] = useState([])
  // console.log(readList)
  // console.log(allData)
  console.log(sortData)
  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])
  useEffect(() => {
    const storedReadList = getStoredReadBookId()
    if (allData.length > 0) {
      let filteredId = []
      for (let i of storedReadList) {
        // console.log(i)
        const filter = allData.find(fetchId => fetchId.id == i)
        // filteredId = [...filteredId,filter]
        if(filter){
          filteredId.push(filter)
        }
      }
      setReadList(filteredId)
    }
  }, [allData])

  // const sortReadList = sortData === "All" || sortData === "" ? readList : readList.filter(sortList => sortList.category === sortData);
  let sortReadList = []
  if(sortData === 'All' || sortData === '' ){
    sortReadList = readList
  }
  else{
    sortReadList = readList.filter(list => list.category == sortData)
  }
  console.log(sortReadList);

  return (
    <div className="space-y-5">
      {
        sortReadList.map(info =>
          <div key={info.id} className="flex items-center border p-1 rounded-md gap-10">
            <img src={info.img} className="h-60 w-40 rounded-md border"/>
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

export default ReadList




