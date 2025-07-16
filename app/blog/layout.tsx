import { ReactNode } from 'react';

export const metadata = {
	title: 'Blog',
};

type TProps = {
	children: ReactNode;
};

export default function BlogLayout({ children }: TProps) {
	return <>{children}</>;
}
