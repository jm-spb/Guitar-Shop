import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.scss';

import { Header } from './components';
import { HomePage, CartPage, EmptyCartPage } from './pages';

export const App = () => {
	const [ itemsAll, setItemsAll ] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://gist.githubusercontent.com/jm-spb/06e13e0d892ebfe70e143ab67c3604f0/raw/ca103408a0f7b1adea900891732b72fc8d191752/guitar-shop.json'
			)
			.then(({ data }) => setItemsAll(data));
	}, []);

	return (
		<div className="index-page">
			<div className="index-page__content container">
				<div className="index-page__header">
					<Header />
				</div>
				{/* render - если хотим прокинуть в компонент пропсы */}
				<Route exact path="/" render={() => <HomePage items={itemsAll} />} />
				<Route exact path="/cart" component={CartPage} />
				<Route exact path="/empty" component={EmptyCartPage} />
			</div>
		</div>
	);
};
