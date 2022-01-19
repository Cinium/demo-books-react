import { useState } from 'react';
import Button from '../Button/Button';
import './AddModal.css';

function AddModal({ close, add }) {
	const [inputData, setInputData] = useState();
	const [errors, setErrors] = useState({});

	function handleInput(e) {
		const input = e.target;

		if (!input.validity.valid) {
			setErrors({ ...errors, [input.id]: input.validationMessage });
		} else {
			setErrors({ ...errors, [input.id]: '' });
		}

		setInputData({ ...inputData, [input.id]: input.value });
	}

	function handleClick(e) {
		e.preventDefault();
		add(inputData);
	}

	return (
		<div className="modal">
			<form className="modal__container">
				<h3 className="modal__title">Добавить</h3>

				<label className="modal__label" htmlFor="name">
					Название
					<input
						className="modal__input"
						id="name"
						value={inputData?.name || ''}
						placeholder="Название книги"
						onInput={handleInput}
						minLength={2}
						required
					/>
					<span className="modal__error">{errors.name}</span>
				</label>

				<label className="modal__label" htmlFor="author">
					Автор
					<input
						className="modal__input"
						id="author"
						value={inputData?.author || ''}
						placeholder="Автор"
						onInput={handleInput}
						minLength={2}
						required
					/>
					<span className="modal__error">{errors.author}</span>
				</label>

				<label className="modal__label" htmlFor="description">
					Описание
					<textarea
						className="modal__input modal__textarea"
						id="description"
						value={inputData?.description || ''}
						placeholder="Описание"
						onInput={handleInput}
						minLength={2}
						required
					/>
					<span className="modal__error">{errors.description}</span>
				</label>

				<div className="modal__button">
					<Button onClick={handleClick} type="submit">
						Добавить
					</Button>
				</div>
			</form>

			<div className="modal__overlay" onClick={close} />
		</div>
	);
}

export default AddModal;
