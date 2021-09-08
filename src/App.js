import React from 'react';
import './scss/App.scss';

import logo from './assets/icons/GS logo.png';
import edwards from './assets/img/guitar/min/EdwardsLP.webp';
import epiphone from './assets/img/guitar/min/epiphone.webp';
import fender from './assets/img/guitar/min/fender.webp';
import gibson from './assets/img/guitar/min/gibson.webp';
import jackson from './assets/img/guitar/min/jackson.webp';
import solar from './assets/img/guitar/min/solar.webp';
import cart from './assets/icons/cart.png';
import triangle from './assets/icons/triangle.png';

function App() {
	return (
		<div className="index-page">
			<div className="index-page__content container">
				{/* HEADER */}
				<div className="index-page__header">
					<header className="header">
						<div className="header__container">
							<div className="header__logo">
								<img src={logo} width={40} height={40} alt="logo" />
								<div className="header__title">
									<h1>GUITAR SHOP</h1>
									<p>Продажа гитар и музыкального оборудования</p>
								</div>
							</div>
							<div className="header__cart">
								<a href="/cart.html" className="button button-cart">
									<span>10000 ₽</span>
									<div className="button__delimiter" />
									<img src={cart} alt="cart" />
									<span>3</span>
								</a>
							</div>
						</div>
					</header>
				</div>

				{/* SELECT BAR */}
				<div className="index-page__select-bar">
					<div className="select-bar">
						<div className="select-bar__categories">
							<ul>
								<li className="select-bar__categories_active">Все</li>
								<li>Гитары</li>
								<li>Бас-гитары</li>
								<li>Усилители</li>
								<li>Кабинеты</li>
								<li>Микрофоны</li>
							</ul>
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
				</div>

				{/* MAIN */}
				<main className="index-page__main main">
					<h2>Все товары</h2>
					<div className="main__content">
						{/*  */}
						<div className="main__item-card item-card">
							<img className="item-card__image" width={100} height={250} src={edwards} alt="Edwards" />
							<h4 className="item-card__title">Edwards</h4>
							<div className="item-card__selector">
								<ul>
									<li className="item-card__selector_active">с кейсом</li>
									<li>без кейса</li>
								</ul>
							</div>
							<div className="item-card__bottom">
								<div className="item-card__price">500 000 ₽</div>
								<div className="button button-outline button-add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>
						{/*  */}
						<div className="main__item-card item-card">
							<img className="item-card__image" width={100} height={250} src={epiphone} alt="Epiphone" />
							<h4 className="item-card__title">Epiphone</h4>
							<div className="item-card__selector">
								<ul>
									<li className="item-card__selector_active">с кейсом</li>
									<li>без кейса</li>
								</ul>
							</div>
							<div className="item-card__bottom">
								<div className="item-card__price">20 000 ₽</div>
								<div className="button button-outline button-add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="main__item-card item-card">
							<img className="item-card__image" width={100} height={250} src={fender} alt="Fender" />
							<h4 className="item-card__title">Fender</h4>
							<div className="item-card__selector">
								<ul>
									<li className="item-card__selector_active">с кейсом</li>
									<li>без кейса</li>
								</ul>
							</div>
							<div className="item-card__bottom">
								<div className="item-card__price">70 000 ₽</div>
								<div className="button button-outline button-add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="main__item-card item-card">
							<img className="item-card__image" width={100} height={250} src={gibson} alt="Gibson" />
							<h4 className="item-card__title">Gibson</h4>
							<div className="item-card__selector">
								<ul>
									<li className="item-card__selector_active">с кейсом</li>
									<li>без кейса</li>
								</ul>
							</div>
							<div className="item-card__bottom">
								<div className="item-card__price">60 000 ₽</div>
								<div className="button button-outline button-add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="main__item-card item-card">
							<img className="item-card__image" width={100} height={250} src={jackson} alt="Jackson" />
							<h4 className="item-card__title">Jackson</h4>
							<div className="item-card__selector">
								<ul>
									<li className="item-card__selector_active">с кейсом</li>
									<li>без кейса</li>
								</ul>
							</div>
							<div className="item-card__bottom">
								<div className="item-card__price">80 000 ₽</div>
								<div className="button button-outline button-add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
						<div className="main__item-card item-card">
							<img className="item-card__image" width={100} height={250} src={solar} alt="Solar" />
							<h4 className="item-card__title">Solar</h4>
							<div className="item-card__selector">
								<ul>
									<li className="item-card__selector_active">с кейсом</li>
									<li>без кейса</li>
								</ul>
							</div>
							<div className="item-card__bottom">
								<div className="item-card__price">90 000 ₽</div>
								<div className="button button-outline button-add">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											fill="white"
										/>
									</svg>
									<span>Добавить</span>
									<i>2</i>
								</div>
							</div>
						</div>{' '}
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;