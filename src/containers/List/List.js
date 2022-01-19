import './List.css';

function List({ items, render }) {
	return (
		<ul className="list">
			{items.map((item, i) => (
				<li key={i} className="list__item">
					{render({...item, key: i})}
				</li>
			))}
		</ul>
	);
}

export default List;
