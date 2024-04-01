import { playlist } from "$lib/server/playlist";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return { playlist };
};
