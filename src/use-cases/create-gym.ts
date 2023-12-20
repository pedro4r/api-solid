import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gym-repository'

interface CreateGymUseCaseRequest {
    title: string
    description: string | null
    phone: string | null
    latitude: number
    longitude: number
}

interface CreateGymUseCaseResponse {
    gym: Gym
}

export class CreateGymUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private gymsRepository: GymsRepository) { }

    async execute({
        title,
        description,
        phone,
        latitude,
        longitude,
    }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
        const user = await this.gymsRepository.create({
            name,
            email,
            password_hash,
        })

        return { user }
    }
}
