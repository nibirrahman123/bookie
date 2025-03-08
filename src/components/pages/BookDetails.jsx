// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addReadBookIdToLocalStorage, getStoredReadBookId, getWishlistBookId, addWishListIdToLocalStorage } from "../utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';


const BookDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const handleReadButton = () => {
    const readBookId = getStoredReadBookId()
    // console.log(readBookId)
    const isExist = readBookId.find(singleBookId => singleBookId === id)
    if (!isExist) {
      addReadBookIdToLocalStorage(id)
      toast.warn('added to read list')
    }
    else {
      toast.warn('you already added to readlist')
    }
  }

  const handleWishListButton = () => {
    const readBookId = getStoredReadBookId()
    const isExists = readBookId.find(singleBookId => singleBookId === id)
    if(isExists){
     return toast.warn('sorry you have already added this on readBooks')
    }
    const wishListId = getWishlistBookId()
    // console.log(wishListId)
    const isExist = wishListId.find(singleWishListId => singleWishListId === id)
    if (isExist) {
      toast.warn('you already added to wishlist')
    }
    else {
      addWishListIdToLocalStorage(id)
      toast.warn('added to wishlist')
    }
  }

  const singleData = books.find((book) => book.id == id);
  // console.log(singleData, id)

  if (singleData) {
    return (
      <div className="flex md:flex-row flex-col gap-8 min-h-[calc(100vh-4.5rem)] font-semibold text-gray-700 px-6 items-center justify-center">
        <img src={singleData.img} className="w-52 md:w-[500px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[700px] rounded-md border" />
        <div className="space-y-4 ">
          <h1 className="text-4xl font-bold uppercase">{singleData.title}</h1>
          <h1 className="text-xl text-justify"><span className="font-extrabold">Review</span> : {singleData.description}</h1>
          <div>
            <h1>Number Of Pages : {singleData.pages}</h1>
            <h1>publisher : {singleData.author}</h1>
            <h1>Year Of Publishing : {singleData.year}</h1>
            <h1>Rating : {singleData.rating}</h1>
          </div>

          <div className="space-x-3">
            <button onClick={handleReadButton} className="btn btn-outline">Read</button>
            <button onClick={handleWishListButton} className="btn btn-outline" >Wishlist</button>
            <Link to={'/'}><button className="btn btn-outline">Home</button></Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }

};

export default BookDetails;