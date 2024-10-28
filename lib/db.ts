import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

declare global {
	// eslint-disable-next-line no-var
	var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NEXT_PUBLIC_ENV === 'production') {
	const libsql = createClient({
		url: `${process.env.TURSO_DATABASE_URL}`,
		authToken: `${process.env.TURSO_AUTH_TOKEN}`,
	})

	const adapter = new PrismaLibSQL(libsql)
	prisma = new PrismaClient({ adapter })
} else {
	if (!global.cachedPrisma) {
		const libsql = createClient({
			url: `${process.env.TURSO_DATABASE_URL}`,
			authToken: `${process.env.TURSO_AUTH_TOKEN}`,
		})

		// const libsql = createClient({
		// 	url: 'file:turso-local-dev.db',
		// })

		const adapter = new PrismaLibSQL(libsql)
		global.cachedPrisma = new PrismaClient({ adapter })
	}
	prisma = global.cachedPrisma
}

export const db = prisma
