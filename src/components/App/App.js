import { useEffect, useState } from 'react';
import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import initialBooks from '../../utils/booksData';
import AddModal from '../AddModal/AddModal';
import EditModal from '../EditModal/EditModal';
import './App.css';

function App() {
	const [openedModal, setOpenedModal] = useState(null);
	const [currentBook, setCurrentBook] = useState({});
	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('books')) {
			localStorage.setItem('books', JSON.stringify(initialBooks));
			setBookList(initialBooks);
		} else {
			setBookList(JSON.parse(localStorage.getItem('books')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(bookList));
	}, [bookList]);

	function openModal(name) {
		setOpenedModal(name);
	}

	function closeModal() {
		setOpenedModal('');
	}

	function editBook(e) {
		setCurrentBook(e);
		openModal('edit');
	}

	function handleEdit(data) {
		const newBookList = bookList.map(book => {
			if (book._id === data._id) return data;

			return book;
		});

		setBookList(newBookList);
		closeModal();
	}

	function handleAdd(data) {
		setBookList([...bookList, { ...data, _id: Date.now() }]);
		closeModal();
	}

  function handleDelete(data) {
    setBookList(bookList.filter(book => book._id !== data._id))
  }

	return (
		<div className="app">
			<Header onOpenModal={() => openModal('add')} title={'Demo Books'} />
			<Main bookList={bookList} editBook={editBook} deleteBook={handleDelete} />
			{openedModal === 'edit' && (
				<EditModal edit={handleEdit} book={currentBook} close={closeModal} />
			)}
			{openedModal === 'add' && <AddModal add={handleAdd} close={closeModal} />}
		</div>
	);
}

export default App;
