import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBookmark, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

function App() {
	return (
		<div className="wrapper">
			<header>
				<div className="headerLeft">
					<img width={40} height={40} src="/assets/GS logo.png" alt="Guitar Shop Logo" />
					<div className="headerInfo">
						<h3>GUITAR SHOP</h3>
						<p>Продажа гитар и музыкального оборудования</p>
					</div>
				</div>
				<ul className="headerRight">
					<li>
						<FontAwesomeIcon icon={faBookmark} />
						<span>1200 руб.</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faUserCircle} />
					</li>
				</ul>
			</header>
			<div className="content">
				<h1>Оборудование</h1>

				<div className="guitars">
					<div className="card">
						<img src="/assets/EdwardsLP.jpg" width={200} height={200} alt="Edwards Les Paul" />
						<p>Edwards Les Paul Black Cherry</p>
						<div className="cardBottom">
							<div className="cardBottomPrice">
								<p>Цена:</p>
								<b>12 999 руб.</b>
							</div>
							<button>
								<FontAwesomeIcon icon={faPlusSquare} size="2x" className="plus" />
							</button>
						</div>
					</div>
					<div className="card">
						<img src="/assets/EdwardsLP.jpg" width={200} height={200} alt="Edwards Les Paul" />
						<p>Edwards Les Paul Black Cherry</p>
						<div className="cardBottom">
							<div className="cardBottomPrice">
								<p>Цена:</p>
								<b>12 999 руб.</b>
							</div>
							<button>
								<FontAwesomeIcon icon={faPlusSquare} size="2x" className="plus" />
							</button>
						</div>
					</div>
					<div className="card">
						<img src="/assets/EdwardsLP.jpg" width={200} height={200} alt="Edwards Les Paul" />
						<p>Edwards Les Paul Black Cherry</p>
						<div className="cardBottom">
							<div className="cardBottomPrice">
								<p>Цена:</p>
								<b>12 999 руб.</b>
							</div>
							<button>
								<FontAwesomeIcon icon={faPlusSquare} size="2x" className="plus" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
