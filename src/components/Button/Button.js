import { useEffect, useState } from 'react';
import './Button.css';

function Button({ children, onClick, type = 'button', className }) {
	const [hasText, setHasText] = useState(false);

	useEffect(() => {
		if (Array.isArray(children)) {
			setHasText(children.some(child => typeof child === 'string'));
		}
	}, [children]);

	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			style={{ padding: hasText ? '8px 15px 8px 20px' : '8px 20px' }}
			type={type}
		>
			{children}
		</button>
	);
}

export default Button;
