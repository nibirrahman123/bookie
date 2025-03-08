import { useEffect, useState } from "react"
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([])
    // console.log('books', books)
    useEffect(() => {
        fetch('books.json')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="space-y-4">
            <h1 className="text-6xl text-center font-bold uppercase">BOOKOS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    books.map((booksData, idx) => <Book key={idx} data={booksData}></Book>)
                }
            </div>
        </div>
    )
}

export default Books