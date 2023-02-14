import { Sparkle } from "phosphor-react";

interface HeaderProps {
	title?: string;
}

export default function Header({ title = "Home" }: HeaderProps) {
	return (
		<div className="border-b-[1px] border-solid border-[#ebeef0] flex py-6 px-5 items-center justify-between">
			<h1 className="font-bold text-xl">{title}</h1>
			<Sparkle size={24} className="text-twitter-blue" />
		</div>
	);
}
