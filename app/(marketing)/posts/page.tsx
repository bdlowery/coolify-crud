'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PostsPage() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		const data: any = await fetch('/api/post/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, content }),
		})
		console.log(data)
	}
	return (
		<section className="py-20">
			<div className="container">
				<div className="max-w-xl mx-auto">
					<h1 className="text-3xl">add post</h1>
					<div>
						<form onSubmit={onSubmit} className="flex flex-col">
							<div className="flex flex-col">
								<label>post title</label>
								<input type="text" className="border" onChange={(e) => setTitle(e.target.value)} />
							</div>

							<div className="flex flex-col">
								<label>post content</label>
								<textarea className="border" onChange={(e) => setContent(e.target.value)} />
							</div>
							<div>
								<button type="submit" className="border bg-zinc-300 p-2">
									add post
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
