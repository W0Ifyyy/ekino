import { Metadata } from 'next';

type TProps = {
	params: {
		slug?: string[];
	};
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
	return {
		title: params.slug
			? 'Szukaj filmu lub serialu'
			: `Szukaj: ${params.slug}`,
	};
}

export default function SearchPage({ params }: TProps) {
	return (
		<article>
			<section>Params: {params.slug && params.slug.toString()}</section>
		</article>
	);
}
