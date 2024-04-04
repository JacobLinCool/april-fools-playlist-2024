<script lang="ts">
	import { Audio } from "svelte-audio";

	export let data;

	const playlist = data.playlist.sort(() => Math.random() - 0.5);

	let ready = false;
</script>

<svelte:head>
	<title>Playlist of April Fools' Day Challenge 2024</title>
	<meta
		name="description"
		content="Playlist of April Fools' Day Challenge 2024. (NTNU Computer Programming April Fools' Day Special Project 2024)"
	/>
	<meta
		property="og:image"
		content="https://github.com/JacobLinCool/april-fools-playlist-2024/blob/main/static/favicon.png?raw=true"
	/>
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center space-y-4 p-4">
	<div class="flex flex-col items-center justify-center">
		<h1 class="w-full text-lg font-bold">
			Playlist of <br /><span class="text-2xl">April Fools' Day Challenge 2024</span>
		</h1>
		<p class="opacity-70">NTNU Computer Programming April Fools' Day Special Project 2024</p>
	</div>
	<div class="max-w-full">
		<Audio {playlist} on:loadedmetadata={() => (ready = true)} />
	</div>
</div>
