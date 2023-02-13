import { Sparkle } from "phosphor-react";

export default function Timeline() {
	return (
		<div className="border-x-[1px] border-solid border-[#ebeef0]">
			<div className="border-b-[1px] border-solid border-[#ebeef0] flex py-6 px-5 items-center justify-between">
				<h1 className="font-bold text-xl">Home</h1>
				<Sparkle size={24} className="text-twitter-blue" />
			</div>
			<form className=" py-6 px-5 flex flex-col gap-2">
				<label htmlFor="" className=" flex gap-2">
					<img
						className="rounded-full w-12 h-12"
						src="https://github.com/guilhermefigueira.png	"
						alt="Guilherme de Biazi Figueira"
					/>
					<textarea
						className="flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7083]"
						id="tweet"
						placeholder="O que está acontecendo?"
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
		</div>
	);
}
