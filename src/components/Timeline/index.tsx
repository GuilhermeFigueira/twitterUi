import Tweet from "../Tweet";
import Header from "../Header";
import TweetForm from "../TweetForm";

export default function Timeline() {
	return (
		<div className="border-x-[1px] border-solid border-[#ebeef0]">
			<Header />
			<TweetForm />
			<div className="bg-[#f7f9fa] border-t-[1px] border-solid h-3" />
			<Tweet userName={"Guilherme"} user={"@GuilhermeFigueira"}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
				esse repellendus ipsa quibusdam officia vero, molestiae vitae,
				itaque recusandae at iure deserunt nemo nostrum voluptatibus
				adipisci totam blanditiis ullam illo.
			</Tweet>
			<Tweet userName={"@FigueiraGuilherme"} user={"Figueira"}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
				obcaecati quia eveniet ad maiores blanditiis, minima molestias
				aliquam delectus officiis alias aperiam amet sunt voluptatum
				modi quibusdam dicta asperiores fuga!
			</Tweet>
		</div>
	);
}
