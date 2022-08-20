import Image from '@/Components/Image';

export default function Comments() {
	return (
		<>
			<section>
				<h1>Comments Components Panel</h1>
			</section>
			<section>
				{new Array(1000).fill(1).map((_, i) => (
					<div key={i}>
						<h1>Inspiring Sculptures</h1>
						<Image />
					</div>
				))}
			</section>
		</>
	);
}
