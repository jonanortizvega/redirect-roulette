import { error, redirect } from '@sveltejs/kit';

export function GET({ url, cookies }) {
    const token = url.searchParams.get('token');
    const giveawayId = url.searchParams.get('giveawayId');

    if (!token || !giveawayId) {
        return error(400, 'Bad Request');
    }

    console.log('token', token);
    console.log('giveawayId', giveawayId);

    cookies.set('token', token, {
        expires: new Date(8640000 + Date.now()),
        path: '/'
    });

    throw redirect(303, `/${giveawayId}`);
}

