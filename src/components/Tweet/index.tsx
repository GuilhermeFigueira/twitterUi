import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

interface TweetProps {
	content: string;
	userName: string;
	user: string;
}

export default function Tweet({ content, userName, user }: TweetProps) {
	return (
		<Link
			to="/status"
			className="py-6 px-5 grid grid-cols-[3rem_1fr] gap-3 border-solid border-b-[1px] border-[#ebeef8]"
		>
			<img
				src="https://github.com/guilhermefigueira.png"
				alt=""
				className="rounded-full w-12 h-12"
			/>

			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-1">
					<strong>{userName}</strong>
					<span className="text-sm text-[#89a2b8]">{user}</span>
				</div>
				<p className="line-">{content}</p>

				<div className="flex gap-8 mt-3 child:flex child:items-center child:gap-2 child:text-sm child:text-[#89a2b8] hover:text-twitter-blue">
					<button className="hover:text-twitter-blue">
						<ChatCircle />
						20
					</button>

					<button className="hover:text-twitter-blue">
						<ArrowsClockwise />
						20
					</button>

					<button className="hover:text-twitter-blue">
						<Heart />
						20
					</button>
				</div>
			</div>
		</Link>
	);
}
