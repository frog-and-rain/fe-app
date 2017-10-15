import React from 'react';
import T from 'prop-types';

import View from './View';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		
		this.node = null;
		
		this.setNode = this.setNode.bind(this);
	}
	
	setNode(node) {
		this.node = node;
	}
	
	componentDidMount() {
		window.addEventListener('click', (event) => {
			if (event.target === this.node) {
				this.props.onShow(false);
			}
		});
		
		window.addEventListener('keydown', (event) => {
			if (event.keyCode === 27) {
				this.props.onShow(false);
			}
		})
	}
	
	render() {
		return (
			<View setNode={this.setNode} {...this.props} />
		);
	}
}

Modal.propTypes = {
	show: T.bool.isRequired,
	onShow: T.func.isRequired,
	current: T.object,
};

export default Modal;