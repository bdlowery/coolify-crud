'use client'

import { useState, useTransition } from 'react'
import { createPost } from './actions'

export default function PostsPage() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const [isPending, startTransition] = useTransition()

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		startTransition(() => {
			createPost({ title, content })
		})
	}

	return (
		<section className="py-20">
			<div className="container">
				<div className="max-w-xl mx-auto">
					<h1 className="text-3xl">add post</h1>
					<div>
						<form onSubmit={onSubmit} className="flex flex-col">
							<div className="flex flex-col">
								<label>Post Title</label>
								<input type="text" className="border" onChange={(e) => setTitle(e.target.value)} />
							</div>

							<div className="flex flex-col">
								<label>Post Content</label>
								<textarea className="border" onChange={(e) => setContent(e.target.value)} />
							</div>
							<div>
								<button type="submit" className="border bg-zinc-300 p-2" disabled={isPending}>
									Add Post
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
