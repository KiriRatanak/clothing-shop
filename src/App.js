import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

import HatsPage from './pages/hats-page/hatspage.component'
import JacketsPage from './pages/jackets-page/jackets-page.component'
import SneakersPage from './pages/sneakers-page/sneakers-page.componnet'
import MenPage from './pages/men-page/men-page.component'
import WomenPage from './pages/women-page/women-page.component'

import './App.css';

function App() {
  return (
    <div>
			<Header />
      <Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/shop/hats" component={HatsPage} />
				<Route exact path="/shop/jackets" component={JacketsPage} />
				<Route exact path="/shop/sneakers" component={SneakersPage} />
				<Route exact path="/shop/mens" component={MenPage} />
				<Route exact path="/shop/womens" component={WomenPage} />
			</Switch>
    </div>
  );
}

export default App;
