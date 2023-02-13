import { Sparkle } from "phosphor-react";

export default function Timeline() {
	return (
		<div className="border-x-[1px] border-solid border-[#ebeef0]">
			<div className="border-b-[1px] border-solid border-[#ebeef0] flex p-5 items-center justify-between">
				<h1 className="font-bold text-xl">Home</h1>
				<Sparkle size={24} className="text-twitter-blue" />
			</div>
			<form className="">
				<label htmlFor="">
					<img
						className="rounded-full w-14"
						src="https://github.com/guilhermefigueira.png	"
						alt="Guilherme de Biazi Figueira"
					/>
					<textarea
						className=""
						id="tweet"
						placeholder="O que está acontecendo?"
					/>
				</label>
				<button className="" type="submit">
					Tweetar
				</button>
			</form>
		</div>
	);
}
