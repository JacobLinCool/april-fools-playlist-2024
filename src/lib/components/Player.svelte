<script lang="ts">
	import "aplayer/dist/APlayer.min.css";
	import { onMount, createEventDispatcher } from "svelte";
	import type { Playlist } from "$lib/types";

	const dispatch = createEventDispatcher<{
		ready: void;
	}>();

	export let playlist: Playlist;

	let ap: any;
	let target: HTMLElement;

	onMount(() => {
		init(target);
	});

	async function init(container: HTMLElement) {
		// @ts-expect-error no types available
		const { default: APlayer } = await import("aplayer");

		ap = new APlayer({
			container,
			audio: playlist,
		});

		ap.on("loadedmetadata", () => {
			dispatch("ready");
		});
	}
</script>

<div bind:this={target} class="h-full w-full"></div>
