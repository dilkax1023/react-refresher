import Image from '@/Components/Image';

export default function Gallery() {
	console.log('Gallery');
	return (
		<section>
			{new Array(1000).fill(1).map((_, i) => (
				<div key={i}>
					<h1>Inspiring Sculptures</h1>
					<Image />
				</div>
			))}
		</section>
	);
}
