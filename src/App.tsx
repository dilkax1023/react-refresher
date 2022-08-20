import React, { startTransition, Suspense } from 'react';
import Tabs from '@/Components/Tabs';
// import Glimmer from './Glimmer';

const Comments = React.lazy(() => import('@/Components/Comments'));
const Photos = React.lazy(() => import('@/Components/Photos'));

export default function App() {
	const [tab, setTab] = React.useState('photos');

	function handleTabSelect(tab: string) {
		startTransition(() => {
			setTab(tab);
		});
	}

	return (
		<div>
			<Tabs onTabSelect={handleTabSelect} />
			<Suspense fallback={<h1>Loading</h1>}>{tab === 'photos' ? <Photos /> : <Comments />}</Suspense>
		</div>
	);
}
