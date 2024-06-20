import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST() {
    revalidateTag('my-cachetag');

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
