import React from 'react';
import T from 'prop-types';

import Button from './Button';

import './styles.css';
const DescriptionView = ({ setNode }) => {
	return (
		<div className="description">
			<div className="description-content">
				<div className="description-content-left">
					<h2 className="description-content-left-title">watch our video</h2>
					
					<p className="description-content-left-subtitle">
						Lorem ipsum dolor sit amet, nunc mi eget, augue nec integer <br />
						amet et, luctus eu cras curabitur, ut orci eget, orci suspendisse <br/>
						autem sem rutrum libero. Ullamcorper suspendisse <br/>
						suspendisse mollis iaculis lobortis ridiculus, vitae a porttitor <br/>
						urna, consectetuer semper at ullamcorper, nunc aenean <br/>
						lobortis wisi tempus. Ac montes.
					</p>
					
					<div className="description-content-left-btn">
						<Button title="Read More" />
					</div>
				</div>
				
				<div ref={setNode} className="description-content-right">
					<iframe title="description" src="https://www.youtube.com/embed/Z0meRqzBtdg" />
				</div>
			</div>
		</div>
	);
};

DescriptionView.propTypes = {
	setNode: T.func.isRequired,
};

export default DescriptionView;