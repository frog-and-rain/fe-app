import React from 'react';
import T from 'prop-types';

import './styles.css';

const BannerView = ({ messages, setMessage, sendMessage, setInput,
											setUserName, submitUserName, setNodeName, setNodeContent }) => {
	return (
		<div className="chat">
			<div ref={setNodeName} className="chat-content-name">
				<input type="text" onChange={setUserName} placeholder="Enter your name" />
				<button type="button" onClick={submitUserName}>Submit</button>
			</div>
			<div className="chat-box">
				<div ref={setNodeContent} className="chat-content">
					{messages.map(item =>
						<div key={item.key}>
							<span>{item.name}:</span>
							<span>{'  '}{item.text}</span>
						</div>
					)}
				</div>
				<div className="chat-input">
					<input ref={setInput} type="text" onChange={setMessage} />
					<button type="button" onClick={sendMessage}>Send</button>
				</div>
			</div>
		</div>
	);
};

BannerView.propTypes = {
	messages: T.arrayOf(T.object).isRequired,
	setMessage: T.func.isRequired,
	sendMessage: T.func.isRequired,
	setInput: T.func.isRequired,
	setUserName: T.func.isRequired,
	submitUserName: T.func.isRequired,
	setNodeName: T.func.isRequired,
	setNodeContent: T.func.isRequired,
	usedName: T.bool.isRequired,
};

export default BannerView;