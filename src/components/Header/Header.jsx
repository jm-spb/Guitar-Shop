import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/GS logo.png';
import cart from '../../assets/icons/cart.png';

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/">
					<div className="header__logo">
						<img src={logo} width={40} height={40} alt="logo" />
						<div className="header__title">
							<h1>GUITAR SHOP</h1>
							<p>Продажа гитар и музыкального оборудования</p>
						</div>
					</div>
				</Link>

				<div className="header__cart">
					<Link to="/cart">
						<button className="button button-cart">
							<span>10000 ₽</span>
							<div className="button__delimiter" />
							<img src={cart} alt="cart" />
							<span>3</span>
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};
