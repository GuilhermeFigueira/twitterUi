interface TweetProps {
	children: string;
	user: string;
}

export default function Tweet({ children, user }: TweetProps) {
	return (
		<div className="bg-white w-fit ">
			<strong>{user}</strong>
			<p>{children}</p>
			<button>Like</button>
		</div>
	);
}
