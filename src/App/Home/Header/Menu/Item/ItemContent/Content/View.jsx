import React from 'react';

import ContentList from '../ContentList';
import './styles.css';

import leftLogo from '../../../../image/left-logo.png';

const options = [
	{text: 'item 1', link: '#'},
	{text: 'item 2', link: '#'},
	{text: 'item 3', link: '#'},
	{text: 'item 4', link: '#'},
	{text: 'item 5', link: '#'},
];

const header = {
	title: 'Column Title',
	subTitle: 'sub title'
};


const HeaderBottomContent = () => {
	return (
		<div className="content-full-width">
			<div className="content-full-width-column">
				<ContentList options={options} header={header} />
			</div>
			<div className="content-full-width-column">
				<ContentList options={options} header={header} />
			</div>
			<div className="content-full-width-column">
				<ContentList options={options} header={header} />
			</div>
			<div className="content-full-width-column">
				<img src={leftLogo} alt="left-logo" width={210} height={42} />
				<p>
					The Yoast Analytics plugin lets you easily <br />
					connect your website to Google Analytics and <br />
					keep track of all your site traffic and key metrics <br />
					in real-time.
				</p>
			</div>
		</div>
	);
};

export default HeaderBottomContent;