import React from 'react';

import View from './View';

const languages = [
	'vie', 'eng'
];

class Language extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			language: '',
		};
		
		this.changeLanguage = this.changeLanguage.bind(this);
	}
	
	changeLanguage(value) {
		this.setState({ language: value });
	}
	
	render() {
		return (
			<View list={languages} changeLanguage={this.changeLanguage} />
		)
	}
}

export default Language;