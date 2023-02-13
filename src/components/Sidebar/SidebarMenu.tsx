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
		<aside className="flex flex-col justify-between h-screen">
			<div className="py-2 px-3 flex flex-col ">
				<div>
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
					className="bg-twitter-blue rounded-full flex justify-center w-full text-white text-lg font-black p-3 hover:brightness-90"
				>
					Tweet
				</button>
			</div>
			<div className="flex  items-center p-3">
				<img
					src="https://github.com/guilhermefigueira.png"
					alt=""
					className="w-10 h-10"
				/>
				<div className="flex flex-col">
					<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700">
						Made by{" "}
						<a
							href="https://github.com/guilhermefigueira.png"
							target="_blank"
							className="underline"
						>
							{" "}
							Guilherme Figueira
						</a>
					</h1>
					<h2>@GuilhermeFigueira</h2>
				</div>
				<div className="flex flex-1 justify-end">
					<DotsThreeCircle className="float-right" />
				</div>
			</div>
		</aside>
	);
}
