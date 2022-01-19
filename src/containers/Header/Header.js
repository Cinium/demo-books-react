import Button from '../../components/Button/Button';
import './Header.css';

function Header({ title, onOpenModal }) {
	return (
		<header className="header">
			<h1 className="header__title">{title}</h1>
			<div className="header__menu">
				<Button className={"header__add-button"} onClick={onOpenModal}>
					Добавить
					<span className="material-icons-outlined">add</span>
				</Button>
			</div>
		</header>
	);
}

export default Header;
