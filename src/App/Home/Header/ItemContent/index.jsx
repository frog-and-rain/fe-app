import React from 'react';
import T from 'prop-types';

import './styles.css';

const ItemContent = ({ options, header, border }) => {
	return (
		<div>
			{!!header && (
				<div className="item-content-header">
					<h4>{header.title}</h4>
					<p>{header.subTitle}</p>
				</div>
			)}
			
			<ul className="item-content">
				{options.map((item, index) =>
					<div key={`item-content-${index}`} className="item-content-item">
						<li className={border ? 'li-border' : 'li-none-border'} key={`full-width-column-item-${index}`}>
							<a href={item.link}>{item.text}</a>
						</li>
						{!!border && <hr />}
					</div>
				)}
			</ul>
		</div>
	)
};

ItemContent.propTypes = {
	options: T.array.isRequired,
	header: T.object,
	border: T.bool,
};

export default ItemContent;