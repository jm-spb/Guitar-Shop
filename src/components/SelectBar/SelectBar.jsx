import React, { useState, useEffect, useRef } from 'react';

import triangle from '../../assets/icons/triangle.png';

export const SelectBar = ({ categoriesItems, sortPopupItems }) => {
	const [ activeCategotyItem, setActiveCategoryItem ] = useState(0);
	const [ activePopupItem, setActivePopupItem ] = useState(0);
	const [ visiblePopup, setVisiblePopup ] = useState(false);

	const sortRef = useRef();

	useEffect(() => {
		document.body.addEventListener('click', hadleOutsideClick);
	}, []);

	// hide Popup on click outside "select-bar__sort sort"
	const hadleOutsideClick = (e) => {
		if (!e.path.includes(sortRef.current)) setVisiblePopup(false);
	};

	// Set "active" className on items both Categories and Popup
	const onSelectItem = (idx, select) => {
		select === 'category' ? setActiveCategoryItem(idx) : setActivePopupItem(idx);
		setVisiblePopup(false);
	};

	// categoriesItems && - Если categoriesItems === null, undefined; сайт не падает с ошибкой, не рендерится только SelectBar.
	const categoriesList =
		categoriesItems &&
		categoriesItems.map((name, idx) => (
			<li
				key={`${name}_${idx}`}
				className={activeCategotyItem === idx ? 'select-bar__categories_active' : ''}
				onClick={() => onSelectItem(idx, 'category')}
			>
				{name}
			</li>
		));

	const sortPopupList =
		sortPopupItems &&
		sortPopupItems.map((name, idx) => (
			<li
				key={`${name}_${idx}`}
				className={activePopupItem === idx ? 'sort__popup_active' : ''}
				onClick={() => onSelectItem(idx, 'popup')}
			>
				{name}
			</li>
		));

	const activeLabel = sortPopupItems[activePopupItem];

	// toggle & filter Popup
	const togglePopup = () => {
		setVisiblePopup(!visiblePopup);
	};

	return (
		<div className="select-bar">
			<div className="select-bar__categories">
				<ul>{categoriesList}</ul>
			</div>
			<div ref={sortRef} className="select-bar__sort sort">
				<div className="sort__label">
					<img
						className={visiblePopup ? 'rotated' : ''}
						src={triangle}
						width={10}
						height={10}
						alt="triangle"
					/>
					<b>Сортировка&nbsp;по:</b>
					<span onClick={togglePopup}>{activeLabel}</span>
				</div>
				{visiblePopup && (
					<div className="sort__popup">
						<ul>{sortPopupList}</ul>
					</div>
				)}
			</div>
		</div>
	);
};
