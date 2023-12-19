import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInUseCase } from './check-in'

let checkinsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
    beforeEach(() => {
        checkinsRepository = new InMemoryCheckInsRepository()
        sut = new CheckInUseCase(checkinsRepository)
    })
    it('should to check in', async () => {
        const { checkIn } = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-01',
        })

        expect(checkIn.id).toEqual(expect.any(String))
    })
})
