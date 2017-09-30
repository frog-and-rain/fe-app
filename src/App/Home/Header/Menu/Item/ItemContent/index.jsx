import React from 'react';
import T from 'prop-types';

import ContentList from './ContentList';
import ContentFullWidth from './Content';

const ItemContent = ({ options, fullWidth, header, border }) => {
	return (
		<div
			className={fullWidth? 'main-menu-item-content-full' : 'main-menu-item-content-list'}
			style={fullWidth ? {left: '0', right: '0'} : {width: 210}}
		>
			{fullWidth ? <ContentFullWidth /> : (
				<ContentList options={options} header={header} border={border} />
			)}
		</div>
	)
};

ItemContent.propTypes = {
	options: T.array.isRequired,
	header: T.object,
	border: T.bool,
};

export default ItemContent;