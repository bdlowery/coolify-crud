import { db } from '@/lib/db'
import { memoize } from 'nextjs-better-unstable-cache'

export async function fetchPosts() {
	const posts = await db.post.findMany({})
	console.log('get fresh posts')
	return posts
}

const getCachedPosts = memoize(fetchPosts, {
	revalidateTags: ['posts'],
	// persist: false,
})

export default async function getPosts() {
	const posts = await getCachedPosts()
	console.log('get cached posts')
	return posts
}
