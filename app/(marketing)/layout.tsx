import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="py-10">
				<div className="container">
					<div className="max-w-xl mx-auto">
						<div className="flex flex-row gap-3">
							<Link href="/" className="hover:underline">
								home
							</Link>
							<Link href="/posts" className="hover:underline">
								posts
							</Link>
						</div>
					</div>
				</div>
			</header>

			<main className="flex-1">{children}</main>
		</>
	)
}
