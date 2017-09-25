import React from 'react';

import Language from './Language';
import facebook from './logo/facebook.svg';
import google from './logo/google.svg';
import twitter from './logo/twitter.svg';
import vimeo from './logo/vimeo.svg';

import './styles.css';

const TopBarView = () => {
	return (
		<div className="top-bar">
			<a href="">
				<img src={twitter} width={12} height={12} alt="twitter" />
			</a>
			
			<a href="">
				<img src={facebook} width={12} height={12} alt="facebook" />
			</a>
			
			<a href="">
				<img src={google} width={12} height={12} alt="google" />
			</a>
			
			<a href="">
				<img src={vimeo} width={12} height={12} alt="vimeo" />
			</a>
			
			<div className="top-bar-info">
				<span>0909090909</span>
				<span>0909090909</span>
				
				<Language />
				<button className="top-bar-button">
					Free Analysis
				</button>
			</div>
		</div>
	);
};

export default TopBarView;