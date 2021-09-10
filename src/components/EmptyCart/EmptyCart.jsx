import React from 'react';
import { Link } from 'react-router-dom';

import './EmptyCart.scss';

import emptyCard from '../../assets/img/empty_cart.webp';

export const EmptyCart = () => {
	return (
		<div class="cart cart__empty">
			<h2>Корзина пустая</h2>
			<p>
				Вероятней всего, вы ещё не выбрали ни одного товара.<br />
				Для того, чтобы добавить товары в корзину, перейдите на главную страницу.
			</p>
			<img src={emptyCard} alt="Empty cart" />
			<Link to="/">
				<button class="button button-black">
					<span>Вернуться назад</span>
				</button>
			</Link>
		</div>
	);
};
