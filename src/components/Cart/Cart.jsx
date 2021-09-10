import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../../assets/icons/cart.png';
import trash from '../../assets/icons/trash.png';

import './Cart.scss';

export const Cart = () => {
	return (
		<div class="cart cart__page">
			<div class="cart__top">
				<h2 class="cart__title">
					<img src={cart} alt="cart" />Корзина
				</h2>
				<div class="cart__clear">
					<img src={trash} alt="trash" />
					<span>Очистить корзину</span>
				</div>
			</div>
			<div class="cart__content">
				<div class="item cart__item">
					<div class="item__img">
						<img
							class="pizza-block__image"
							src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
							alt="Pizza"
						/>
					</div>
					<div class="item__info">
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div class="item__count">
						<div class="button button-outline button-circle item__count_minus">
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
									fill="#EB5A1E"
								/>
								<path
									d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
									fill="#EB5A1E"
								/>
							</svg>
						</div>
						<b>2</b>
						<div class="button button-outline button-circle item__count_plus">
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
									fill="#EB5A1E"
								/>
								<path
									d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
									fill="#EB5A1E"
								/>
							</svg>
						</div>
					</div>
					<div class="item__price">
						<b>770 ₽</b>
					</div>
					<div class="item__remove">
						<div class="button button-outline button-circle">
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
									fill="#EB5A1E"
								/>
								<path
									d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
									fill="#EB5A1E"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="cart__bottom bottom">
				<div class="bottom__details">
					<span>
						Всего пицц: <b>3 шт.</b>
					</span>
					<span>
						Сумма заказа: <b>900 ₽</b>
					</span>
				</div>
				<div class="bottom__buttons">
					<Link to="/">
						<button class="button button-outline button-add go-back-btn">
							<svg
								width="8"
								height="14"
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 13L1 6.93015L6.86175 1"
									stroke="#D3D3D3"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<span>Вернуться назад</span>
						</button>
					</Link>

					<div class="button pay-btn">
						<span>Оплатить сейчас</span>
					</div>
				</div>
			</div>
		</div>
	);
};
