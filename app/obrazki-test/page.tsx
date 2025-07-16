import Image from 'next/image';
import BanerEkino2 from '@/public/baner_ekino_2.jpg';
import BanerEkino from '@/public/baner_ekino.jpg';

export default function ImagesTestPage() {
	return (
		<>
			<div className="grid xl:grid-cols-3">
				<Image src={BanerEkino} alt="" sizes="100vw" />
				<Image src={BanerEkino2} alt="" sizes="100vw" />
				<Image src={BanerEkino} alt="" sizes="100vw" />
			</div>
		</>
	);
}
