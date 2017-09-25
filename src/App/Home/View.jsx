import React from 'react';

import TopBar from './TopBar';
import Header from './Header';
import Banner from './Banner';
import Descriptions from  './Descriptions';
import Categories from './Categories';
import Members from './Members';
import Footer from './Footer';

import './styles.css';

const HomeView = () => {
	return (
		<div>
			<section>
				<TopBar />
			</section>
			
			<section>
				<Header />
			</section>
			
			<section>
				<Banner />
			</section>
			
			<section>
				<Descriptions />
			</section>
			
			<section>
				<Categories />
			</section>
			
			<section>
				<Members />
			</section>
			
			<section>
				<Footer />
			</section>
		</div>
	)
};

export default HomeView;