import React from 'react';

import ContentList from '../ContentList';
import './styles.css';

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
				<ContentList options={options} header={header} />
			</div>
		</div>
	);
};

export default HeaderBottomContent;