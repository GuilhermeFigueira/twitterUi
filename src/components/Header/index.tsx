import { Sparkle } from "phosphor-react";

interface HeaderProps {
	title?: string;
	sparkle?: boolean;
}

export default function Header({
	title = "Home",
	sparkle = true,
}: HeaderProps) {
	return (
		<div className="border-b-[1px] border-solid border-[#ebeef0] flex py-6 px-5 items-center justify-between">
			<h1 className="font-bold text-xl">{title}</h1>
			{sparkle && <Sparkle size={24} className="text-twitter-blue" />}
		</div>
	);
}
