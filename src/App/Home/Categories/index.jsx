import React from 'react';
import Modal from '../Modal';
import './styles.css';

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.node = null;
		this.state = {
			user: null,
			show: false,
			channel: null,
		};
		
		this.view = this.view.bind(this);
		this.setNode = this.setNode.bind(this);
	}
	
	setNode(node) {
		this.node = node;
	}
	
	view(show) {
		this.setState({ show })
	}
	
	componentDidMount() {
		this.node.addEventListener('click', (event) => {
			if (event.target === this.node) {
				this.view(true);
			}
		})
	}
	
	render() {
		return (
			<div className="category">
				<div onClick={this.sendMessage} ref={this.setNode} className="category-item">
					Send
					
					<Modal
						onShow={this.view}
						show={this.state.show}
						current={this.node}
					>
						My modal
					</Modal>
				</div>
			</div>
		);
	}
}

export default Categories;