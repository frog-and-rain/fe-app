import React from 'react';
import '../styles.css';
import ColumnView from '../../ItemContent';

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
		<div className="header-bottom">
			<div className="header-bottom-column">
				<ColumnView options={options} header={header} />
			</div>
			<div className="header-bottom-column">
				<ColumnView options={options} header={header} />
			</div>
			<div className="header-bottom-column">
				<ColumnView options={options} header={header} />
			</div>
			<div className="header-bottom-column">
				<ColumnView options={options} header={header} />
			</div>
		</div>
	);
};

export default HeaderBottomContent;