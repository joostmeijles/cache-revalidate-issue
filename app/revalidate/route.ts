import { revalidateTag } from 'next/cache';

export async function POST() {
    revalidateTag('my-cachetag');
}
