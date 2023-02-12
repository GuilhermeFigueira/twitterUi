interface TweetProps {
	children: string;
	user: string;
}

export default function Tweet({ children, user }: TweetProps) {
	return (
		<div className="">
			<strong>{user}</strong>
			<p>{children}</p>
			<button>Like</button>
		</div>
	);
}
