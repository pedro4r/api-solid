import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface CheckInUseCaseRequest {
    userId: string
    gymId: string
}

interface CheckInUseCaseResponse {
    checkIn: CheckIn
}

export class CheckInUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(
        private checkinsRepository: CheckInsRepository
    ) { }

    async execute({
        userId,
        gymId,
    }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
        const checkInOnTheSameDay =
            await this.checkinsRepository.findByUserIdOnDate(userId, new Date())

        if (checkInOnTheSameDay) {
            throw new Error()
        }

        const checkIn = await this.checkinsRepository.create({
            gym_id: gymId,
            user_id: userId,
        })

        return { checkIn }
    }
}
