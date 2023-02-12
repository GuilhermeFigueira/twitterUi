import Icon from "phosphor-react";

interface ItemProps {
	icon: JSX.Element;
	children: string;
}

export default function SidebarItem({ icon, children }: ItemProps) {
	return (
		<div className="flex items-center text-xl">
			<>{icon}</>
			<h1 className="px-2">{children}</h1>
		</div>
	);
}
