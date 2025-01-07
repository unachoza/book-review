import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");
	const [books, setBooks] = useState<string[]>([]);

	//crud
	//keep track of books
	//add book
	//remove book
	//edit book

	const addBook = () => {
		const updatedBooks = [...books, input];
		setBooks(updatedBooks);
	};
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		let newValue = value;
		setInput(newValue);
	};

	return (
		<>
			<h1>Books</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
			<div className="card">
				<input type="text" onChange={(e) => handleInput(e)} />
				<button onClick={addBook}>Add Book</button>
			</div>
			<div>
				<h2>these books</h2>
				{books.map((book) => {
					return <div>{book}</div>;
				})}
			</div>
		</>
	);
}

export default App;
