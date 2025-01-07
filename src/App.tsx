import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

type Book = {
	id: string;
	name: string;
};

function App() {
	const [input, setInput] = useState("");
	const [books, setBooks] = useState<Book[]>([]);

	//crud
	//keep track of books
	//add book
	//remove book
	//edit book

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		let newValue = value;
		setInput(newValue);
	};

	const addBook = () => {
		const updatedBooks = [...books, { id: uuidv4(), name: input }];
		setBooks(updatedBooks);
		setInput("");
	};

  const deleteBook = (id:string):any => {
    const filteredBooks = books.filter(book => book.id !== id)
    setBooks(filteredBooks)
  }

	return (
		<>
			<h1>Books</h1>
			<div className="card">
				<button>count is {books.length}</button>
			</div>
			<div className="card">
				<input type="text" value={input} onChange={(e) => handleInput(e)} />
				<button onClick={addBook}>Add Book</button>
			</div>
			<div>
				<h2>these books</h2>
				{books.map((book) => {
					return (
						<div className="single-book" key={book.id}>
							<div>{book.name}</div>
							<button onClick={() => deleteBook(book.id)}>remove</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
