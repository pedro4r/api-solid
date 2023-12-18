import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
    it('should hash user password upon registration', async () => {
        const registerUseCase = new RegisterUseCase({
            async findByEmail(email) {
                return null
            },
            async create(data) {
                return {
                    id: 'user-1',
                    name: data.name,
                    email: data.email,
                    password_hash: data.password_hash,
                    created_at: new Date(),
                }
            },
        })

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'john@doe.com',
            password: 'password',
        })

        const isPasswordCorrectlyHashed = await compare(
            'password',
            user.password_hash
        )

        expect(isPasswordCorrectlyHashed).toBe(true)
    })
})
