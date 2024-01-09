<script>
	import Step from '../components/Step.svelte';

	let steps = [
		{ name: 'CE-PA', icon: 'fa-solid fa-brain', href: 'https://www.ce-pa.cz/' },
		{
			name: 'Autoškola Brno Petrovi',
			icon: 'fa-solid fa-car',
			href: 'http://autoskola.jsagentura.cz/'
		},
		{ name: 'SAMAK', icon: 'fa-solid fa-scale-balanced', href: 'https://www.samak.cz/' }
	];
	let benefits = [
		{
			name: 'a self taught developer',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisl urna. Sed sed urna ut purus venenatis vulputate in vitae lorem. Ut venenatis.'
		},
		{
			name: 'a website design & UX fanatic',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisl urna. Sed sed urna ut purus venenatis vulputate in vitae lorem. Ut venenatis.'
		},
		{
			name: 'an excellent communicator',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisl urna. Sed sed urna ut purus venenatis vulputate in vitae lorem. Ut venenatis.'
		}
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
				Hi, I'm <span class="poppins text-violet-400">Filip</span> Juráň <br />Full Stack
				<span class="poppins text-violet-400">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-violet-400">favorite tech</span> includes Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Nulla voluptas sed quidem error ducimus vel perferendis aperiam ipsa culpa?
				Officiis.
			</p>
			<a
				target="_blank"
				href="https://www.upwork.com/freelancers/~011e2c519a16eb9300"
				class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
				><div
					class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
				></div>
				<h4 class="relative z-9">Get in touch &rlarr;</h4>
			</a>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img src={'/images/profile.png'} alt="" class="object cover z-[2] max-h-fit" />
		</div>
	</section>

	<section id="projects" class="py-20 lg:px-32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl">A few of my cretive endeavors.</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-violet-400">see</span> my work?
			</h3>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Step step={steps[0]}>
				<p class="">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, consequuntur.
				</p>
			</Step>
			<Step step={steps[1]}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, consequuntur.
			</Step>
			<Step step={steps[2]}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, consequuntur.
			</Step>
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="popping text-violet-400">about</span> me
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am ...</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:texl-3xl md:text-5xl">{benefit.name}</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
        <h5 class="text-2xl sm:text-3xl font-bold text-center poppins ">The <span class="text-violet-500">Complete</span> Package</h5>
	</section>
</main>
