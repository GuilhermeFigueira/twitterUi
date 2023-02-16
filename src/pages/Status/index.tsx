import Header from "../../components/Header";
import Tweet from "../../components/Tweet";

const answers = ["teste!", "testee"];

export default function Status() {
	return (
		<div className="border-x-[1px] border-solid border-[#ebeef0]">
			<Header title="Tweet" sparkle={false} />
			<Tweet
				userName={"Guilherme"}
				user={"@GuilhermeFigueira"}
				content={"aihfnuaeohfuoi"}
			/>
			<div className="bg-[#f7f9fa] border-t-[1px] border-solid h-3" />
			<form className=" py-6 px-5 flex gap-2  border-b-[1px] items-center">
				<label htmlFor="" className=" flex-1 flex gap-2 items-center">
					<img
						className="rounded-full w-12 h-12"
						src="https://github.com/guilhermefigueira.png	"
						alt="Guilherme de Biazi Figueira"
					/>
					<textarea
						className="flex-1  text-xl font-medium mt-5 resize-none focus:outline-none placeholder:text-[#5b7083]"
						id="tweet"
						placeholder="Tweete sua resposta"
					/>
				</label>
				<button
					className=" bg-twitter-blue ml-auto rounded-full py-3 px-6 text-white text-base font-black hover:brightness-90"
					type="submit"
				>
					Tweetar
				</button>
			</form>

			{answers.map((answer) => {
				return (
					<Tweet
						key={answer}
						content={answer}
						userName={""}
						user={""}
					/>
				);
			})}
		</div>
	);
}
