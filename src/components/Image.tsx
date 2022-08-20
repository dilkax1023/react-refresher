import { useState } from 'react';
import reactLogo from '@/Assets/react.svg';

function Image() {
	const [count, setCount] = useState(0);

	console.log('Image');
	return (
		<>
			<img
				src='https://i.imgur.com/ZF6s192.jpg'
				alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
			/>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default Image;
