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
		<aside className="py-6 px-5 flex flex-col gap-8">
			<TwitterLogo size={32} weight="fill" />
			<nav className="flex flex-col gap-y-8">
				<SidebarItem
					className="text-twitter-blue"
					icon={<House weight="fill" className="text-twitter-blue" />}
				>
					Home
				</SidebarItem>
				<SidebarItem icon={<Hash />}>Explore</SidebarItem>
				<SidebarItem icon={<Bell />}>Notifications</SidebarItem>
				<SidebarItem icon={<Envelope />}>Messages</SidebarItem>
				<SidebarItem icon={<BookmarkSimple />}>Bookmarks</SidebarItem>
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
		</aside>
	);
}
