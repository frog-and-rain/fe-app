import React from 'react';

import './styles.css';

const ContentModalView = ({ children, width, height, setNode }) => {
	return (
		<div className="modal-content modal-show-animation" ref={setNode} style={{ width, height } }>
			{children}
		</div>
	)
};

export default ContentModalView;