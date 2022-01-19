import { useCallback } from 'react';
import Book from '../../components/Book/Book';
import List from '../List/List';
import './Main.css';

function Main({ bookList, editBook, deleteBook }) {
	const callbacks = {
		editBook: useCallback(book => editBook(book), [editBook]),
		deleteBook: useCallback(book => deleteBook(book), [deleteBook]),
	};

	const renders = {
		book: useCallback(
			book => {
				return (
					<Book
						book={book}
						onEdit={callbacks.editBook}
						onDelete={callbacks.deleteBook}
					/>
				);
			},
			[callbacks.editBook, callbacks.deleteBook]
		),
	};

	return (
		<main className="main">
			<List items={bookList} render={renders.book} />
		</main>
	);
}

export default Main;
