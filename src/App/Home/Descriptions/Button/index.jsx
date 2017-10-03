import React from 'react';
import T from 'prop-types'

import View from './View';

class Button extends React.Component {
	render() {
		return (
			<View title={this.props.title} styles={this.props.styles} />
		);
	}
}

Button.propTypes = {
	title: T.string.isRequired,
	styles: T.string,
};

export default Button;