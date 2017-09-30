import React from 'react';
import T from 'prop-types';

const ContentList = ({ header, options, border }) => {
	return (
		<div>
			{!!header && (
				<div className="item-content-header">
					<h4>{header.title}</h4>
					<p>{header.subTitle}</p>
				</div>
			)}
			
			<ul className="item-content-list">
				{options.map((item, index) =>
					<div key={`item-content-${index}`} className="item-content-list-item">
						<li className={border ? 'li-border' : 'li-none-border'} key={`full-width-column-item-${index}`}>
							<a href={item.link}>{item.text}</a>
						</li>
						{!!border && <hr />}
					</div>
				)}
			</ul>
		</div>
	);
};

ContentList.propTypes = {
	options: T.array.isRequired,
	border: T.bool,
	header: T.object,
};

export default ContentList;