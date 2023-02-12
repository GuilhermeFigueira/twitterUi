import {
	Bell,
	Bookmark,
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
			<TwitterLogo weight="fill" />
			<nav className="">
				<SidebarItem icon={<House weight="fill" />}>Home</SidebarItem>
				<SidebarItem icon={<Hash />}>Explore</SidebarItem>
				<SidebarItem icon={<Bell />}>Notifications</SidebarItem>
				<SidebarItem icon={<Envelope />}>Messages</SidebarItem>
				<SidebarItem icon={<Bookmark />}>Bookmarks</SidebarItem>
				<SidebarItem icon={<FileText />}>Lists</SidebarItem>
				<SidebarItem icon={<User />}>Profile</SidebarItem>
				<SidebarItem icon={<DotsThreeCircle />}>More</SidebarItem>
			</nav>
			<button>tweet</button>
		</aside>
	);
}
