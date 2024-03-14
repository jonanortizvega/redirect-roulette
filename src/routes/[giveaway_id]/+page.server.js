import { error } from '@sveltejs/kit';

export async function load({ params, cookies }) {
    const giveawayId = params.giveaway_id;

    const token = cookies.get('token');

    if (!token || !giveawayId) {
        return error(400, 'Bad Request');
    }

    console.log('token', token);
    console.log('giveawayId', giveawayId);

    // Fetch giveaway data from API

    return {
        giveawayId
    };
}