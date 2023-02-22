import { FormEvent, useState } from "react";
import Header from "../../components/Header";
import Tweet from "../../components/Tweet";

export default function Home() {
	const [newTweet, setNewTweet] = useState("");

	const [tweets, setTweets] = useState(["Woow", "aaaaaaa", "sera?"]);

	function createNewTweet(event: FormEvent) {
		event.preventDefault();

		setTweets([newTweet, ...tweets]);
		setNewTweet("");
	}

	return (
		<div className="border-x-[1px] border-solid border-[#ebeef0]">
			<Header />
			<form
				onSubmit={createNewTweet}
				className=" py-6 px-5 flex flex-col gap-2"
			>
				<label htmlFor="" className=" flex gap-2">
					<img
						className="rounded-full w-12 h-12"
						src="https://github.com/guilhermefigueira.png	"
						alt="Guilherme de Biazi Figueira"
					/>
					<textarea
						className="flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7083]"
						id="tweet"
						value={newTweet}
						placeholder="O que está acontecendo?"
						onChange={(event) => {
							setNewTweet(event.target.value);
						}}
					/>
				</label>
				<button
					className=" bg-twitter-blue ml-auto rounded-full py-3 px-6 text-white text-base font-black hover:brightness-90"
					type="submit"
				>
					Tweetar
				</button>
			</form>
			<div className="bg-[#f7f9fa] border-t-[1px] border-solid h-3" />
			{tweets.map((tweets) => {
				return (
					<Tweet
						key={tweets}
						content={tweets}
						userName={"Guilherme"}
						user={"@GuilhermeFigueira"}
					/>
				);
			})}
		</div>
	);
}
