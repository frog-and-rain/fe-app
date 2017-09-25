import React from 'react';
import T from 'prop-types';

import './styles.css';

const LanguageView = ({ list, changelanguage }) => {
	return (
		<div className="dropdown-lang">
			<button>language</button>
			<div className="content">
				{
					list.map(
						item => (<a href="" onClick={() => changelanguage(item)}>{item}</a>)
					)
				}
			</div>
		</div>
	)
};

LanguageView.propTypes = {
	list: T.array.isRequired,
	changeLanguage: T.func.isRequired,
};

export default LanguageView;