'use client'

import { useState, useTransition } from 'react'

export default function PostsPage() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const [isPending, setIsPending] = useState(false)
	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setIsPending(true)

		try {
			const response = await fetch('/api/post/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, content }),
			})

			if (response.ok) {
				setTitle('')
				setContent('')
			} else {
				console.error('Failed to create post')
			}
		} catch (error) {
			console.error('An error occurred:', error)
		} finally {
			setIsPending(false)
		}
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
								<input type="text" className="border" value={title} onChange={(e) => setTitle(e.target.value)} />
							</div>

							<div className="flex flex-col">
								<label>Post Content</label>
								<textarea className="border" value={content} onChange={(e) => setContent(e.target.value)} />
							</div>
							<div>
								<button type="submit" className="border bg-zinc-300 p-2" disabled={isPending}>
									{isPending ? 'Pending' : 'Add Post'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
