import React from 'react';
import T from 'prop-types';

import down from '../icon/down.svg';
import './styles.css';

const LanguageView = ({ list, changeLanguage }) => {
	return (
		<div className="dropdown-lang">
			<button>
				language
				<img src={down} width={10} height={10} alt="down" />
			</button>
			<div className="content">
				{
					list.map(
						item => (<a href="" onClick={() => changeLanguage(item)}>{item}</a>)
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