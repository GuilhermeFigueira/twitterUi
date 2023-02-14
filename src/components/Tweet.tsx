import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

interface TweetProps {
	children: string;
	userName: string;
	user: string;
}

export default function Tweet({ children, userName, user }: TweetProps) {
	return (
		<a
			href="#"
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
				<p className="line-">{children}</p>

				<div className="flex gap-8 mt-3 child:flex child:items-center child:gap-2 child:text-sm child:text-[#89a2b8] hover:text-twitter-blue">
					<button className="group">
						<ChatCircle />
						20
					</button>

					<button>
						<ArrowsClockwise />
						20
					</button>

					<button>
						<Heart />
						20
					</button>
				</div>
			</div>
		</a>
	);
}
