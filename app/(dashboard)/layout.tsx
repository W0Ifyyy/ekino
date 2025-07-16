import { ReactNode } from 'react';

export const metadata = {
	title: 'Moje konto',
};

type TProps = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: TProps) {
	return <div className="h-[100vh] bg-red-500">{children}</div>;
}
