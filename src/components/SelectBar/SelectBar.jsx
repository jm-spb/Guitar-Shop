import React, { useState } from 'react';

import triangle from '../../assets/icons/triangle.png';

export const SelectBar = ({ items, onClickItem }) => {
	const [ activeItem, setActiveItem ] = useState(0);

	const onSelectItem = (idx) => {
		setActiveItem(idx);
	};

	// items && - Если items === null, undefined; сайт не падает с ошибкой, не рендерится только SelectBar.
	const list =
		items &&
		items.map((name, idx) => (
			<li
				key={`${name}_${idx}`}
				className={activeItem === idx ? 'select-bar__categories_active' : ''}
				onClick={() => onSelectItem(idx)}
			>
				{name}
			</li>
		));

	return (
		<div className="select-bar">
			<div className="select-bar__categories">
				<ul>{list}</ul>
			</div>
			<div className="select-bar__sort sort">
				<div className="sort__label">
					<img src={triangle} width={10} height={10} alt="triangle" />
					<b>Сортировка по:</b>
					<span>популярности</span>
				</div>
				<div className="sort__popup">
					<ul>
						<li className="sort__popup_active">популярности</li>
						<li>цене</li>
						<li>алфавиту</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
