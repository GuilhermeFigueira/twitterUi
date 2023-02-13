interface ItemProps {
	icon: JSX.Element;
	children: string;
	className?: string;
}

export default function SidebarItem({ className, icon, children }: ItemProps) {
	return (
		<div className="flex items-center font-bold gap-4">
			<div className="text-3xl">{icon}</div>
			<h1 className={`text-xl ${className} `}>{children}</h1>
		</div>
	);
}
