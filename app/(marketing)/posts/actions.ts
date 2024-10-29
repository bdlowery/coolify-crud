'use server'

import { db } from '@/lib/db'
import { revalidateTag } from 'next/cache'

export async function createPost({ title, content }: { title: string; content: string }) {
	const post = await db.post.create({
		data: {
			title,
			content,
		},
	})

	console.log('Created post:', post)

	revalidateTag('posts')

	return { success: true, message: 'Created post' }
}
