import {
	Bell,
	BookmarkSimple,
	DotsThreeCircle,
	Envelope,
	FileText,
	Hash,
	House,
	TwitterLogo,
	User,
} from "phosphor-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
	return (
		<aside className="flex flex-col justify-between h-screen px-3">
			<div className="flex flex-col gap-4">
				<div className="py-5">
					<TwitterLogo size={32} weight="fill" />
				</div>
				<nav className="flex flex-col gap-y-8">
					<SidebarItem
						className="text-twitter-blue"
						icon={
							<House
								weight="fill"
								className="text-twitter-blue"
							/>
						}
					>
						Home
					</SidebarItem>
					<SidebarItem icon={<Hash />}>Explore</SidebarItem>
					<SidebarItem icon={<Bell />}>Notifications</SidebarItem>
					<SidebarItem icon={<Envelope />}>Messages</SidebarItem>
					<SidebarItem icon={<BookmarkSimple />}>
						Bookmarks
					</SidebarItem>
					<SidebarItem icon={<FileText />}>Lists</SidebarItem>
					<SidebarItem icon={<User />}>Profile</SidebarItem>
					<SidebarItem icon={<DotsThreeCircle />}>More</SidebarItem>
				</nav>
				<button
					type="button"
					className="my-5 bg-twitter-blue rounded-full w-5/6 text-white text-lg font-black p-3 hover:brightness-90"
				>
					Tweetar
				</button>
			</div>
			<div className="my-3">
				<div className="flex items-center p-3">
					<img
						src="https://github.com/guilhermefigueira.png"
						alt=""
						className="w-10 h-10 rounded-full"
					/>
					<div className="flex flex-col mx-3">
						<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700">
							<a
								href="https://github.com/guilhermefigueira"
								target="_blank"
								className="font-black hover:text-lg transition-all"
							>
								{" "}
								Guilherme Figueira
							</a>
						</h1>
						<h2 className="font-normal text-neutral-600">
							@GuilhermeFigueira
						</h2>
					</div>
					<div className="flex flex-1 justify-end">
						<DotsThreeCircle className="float-right" />
					</div>
				</div>
			</div>
		</aside>
	);
}
