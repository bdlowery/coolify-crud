import { db } from '@/lib/db'
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const body = await req.json()

	//create post
	const post = await db.post.create({
		data: {
			title: body.title,
			content: body.content,
		},
	})

	console.log('created post')

	revalidateTag('posts')

	return NextResponse.json({ success: true, message: 'Created post' }, { status: 200 })
}
