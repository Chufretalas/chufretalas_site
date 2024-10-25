import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ request, url }) => {
    redirect(301, '/games/scramble_ghosts');
};