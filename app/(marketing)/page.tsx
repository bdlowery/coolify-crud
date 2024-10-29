import getCachedPosts from '../components/data/get-posts'
import getPosts from './components/data/get-posts'

// because I get an error if I don't include
export const revalidate = 86400 // 1 day

export default async function Home() {
	// const response = await getPosts()
	const response = await getCachedPosts()
	// console.log('posts home', response)
	return (
		<section className="py-20">
			<div className="">
				<div className="container">
					<div className="max-w-xl mx-auto">
						<h1 className="text-3xl mb-4">Home</h1>

						<div className="flex flex-row flex-wrap gap-4">
							{response.map(function (post) {
								return (
									<div key={post.id} className="border p-4 rounded">
										<p className="font-bold">post {post.id}</p>
										<p>title: {post.title}</p>
										<p>content: {post.content}</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
