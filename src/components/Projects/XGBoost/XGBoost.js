import React from 'react';
import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import Markdown from '../RenderMD';

function XGBoostPage() {
	const file_name = './XGBoost.md';
	const [post, setPost] = useState('');

	useEffect(() => {
		import(`${file_name}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});

	return (
		<div>
			<Markdown>
				{post}
			</Markdown>
		</div>
	);
}

export default XGBoostPage;