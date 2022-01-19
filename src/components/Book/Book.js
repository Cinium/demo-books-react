import Button from '../Button/Button';
import './Book.css';

function Book({ book, onEdit, onDelete }) {
	return (
		<div className="book">
			<span className="book__number">{book.key+1}</span>

			<div className="book__info">
				<h4 className="book__title">{book.name}</h4>
				<p className="book__author">Автор: {book.author}</p>
			</div>

			<div className="book__actions">
				<Button onClick={() => onEdit(book)} className="book__button">
					<span className="material-icons md-small">edit</span>
				</Button>
				<Button onClick={() => onDelete(book)} className="book__button_type_delete">
					<span className="material-icons md-small">delete</span>
				</Button>
			</div>
		</div>
	);
}

export default Book;
