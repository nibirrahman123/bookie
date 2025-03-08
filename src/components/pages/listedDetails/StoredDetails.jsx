import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

const StoredDetails = () => {
    const {id} = useParams()
    const [allData,setAllData] = useState([])
    const navigate = useNavigate()
    
    // console.log(allData)
    // console.log(id)
    useEffect(() => {
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[]) 

    const handleBack = () => {
      navigate(-1)
    }

    const searchedData = allData.find(sData => sData.id == id)
    // console.log(searchedData)
    if(searchedData){
      return (
        <div className="flex md:flex-row flex-col gap-8 min-h-[calc(100vh-4.5rem)] font-semibold text-gray-700 px-6 items-center justify-center">
        <img src={searchedData.img} className="w-52 md:w-[500px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[700px] rounded-md border" />
        <div className="space-y-4 ">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">{searchedData.title}</h1>
          <h1 className="text-xs  md:text-xl text-justify"><span className="font-extrabold">Review</span> : {searchedData.description}</h1>
          <div className="text-xs md:text-xl ">
            <h1><span className="font-extrabold">Number Of Pages :</span> {searchedData.pages}</h1>
            <h1><span className="font-extrabold">publisher :</span> {searchedData.author}</h1>
            <h1><span className="font-extrabold">Year Of Publishing :</span> {searchedData.year}</h1>
            <h1><span className="font-extrabold">Rating :</span> {searchedData.rating}</h1>
          </div>

          <div>
            <button onClick={handleBack} className="btn btn-outline font-extrabold">back</button>
          </div>
        </div>
        <ToastContainer />
      </div>
      )
    }

}

export default StoredDetails