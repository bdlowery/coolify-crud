// import { memoize } from 'nextjs-better-unstable-cache'
import { db } from '../../../lib/db'
import { unstable_cache } from 'next/cache'

// export async function fetchPosts() {
// 	const posts = await db.post.findMany({})
// 	console.log('get fresh posts')
// 	return posts
// }

// const getCachedPosts = memoize(fetchPosts, {
// 	revalidateTags: ['posts'],
// })

// export default async function getPosts() {
// 	const posts = await getCachedPosts()
// 	console.log('get cached posts')
// 	return posts
// }

export async function fetchPosts() {
	const posts = await db.post.findMany({})
	console.log('get fresh posts')
	return posts
}

const getCachedPosts = unstable_cache(
	fetchPosts,
	['getPosts'], // Key parts for caching
	{
		tags: ['posts'], // Tags for cache invalidation
	}
)

export default getCachedPosts
