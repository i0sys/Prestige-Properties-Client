import Image from "next/image";

const team = [
	{
		name: "Michael Foster",
		role: "Co-Founder / CTO",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
	},
];

const OurTeam = () => {
	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<h2 className="text-pretty text-4xl font-semibold tracking-tight dark:text-gold text-gray-900 sm:text-5xl">
					Our team
				</h2>
				<p className="mt-6 text-lg/8 text-gray-600 dark:text-primary">
					We&apos;re a dynamic group of individuals who are passionate about
					what we do and dedicated to delivering the best results for our
					clients.
				</p>
			</div>
			<ul className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
				{team.map((person) => (
					<li key={person.name}>
						<Image
							width={96}
							height={96}
							alt=""
							src={person.imageUrl}
							className="mx-auto size-24 rounded-full"
						/>
						<h3 className="mt-6 text-base/7 font-semibold tracking-tight dark:text-primary text-gray-900">
							{person.name}
						</h3>
						<p className="text-sm/6 dark:text-primary text-gray-600">
							{person.role}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default OurTeam;
