import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GymsRepository } from '@/repositories/gym-repository'
import { getDistanceBetweenCoordinates } from '@/utils/get-distance-between-coordinates'
import { MaxNumberOfCheckInsError } from './errors/max-number-of-check-ins-error'
import { MaxDistanceError } from './errors/max-distance-error'
import dayjs from 'dayjs'
import { LateCheckInValidationError } from './errors/late-check-in-validation-error'

interface ValidateCheckInUseCaseRequest {
    checkInId: string
}

interface ValidateCheckInUseCaseResponse {
    checkIn: CheckIn
}

export class ValidateCheckInUseCase {
    constructor(
        private checkInsRepository: CheckInsRepository
        // eslint-disable-next-line prettier/prettier
    ) { }

    async execute({
        checkInId,
    }: ValidateCheckInUseCaseRequest): Promise<ValidateCheckInUseCaseResponse> {
        const checkIn = await this.checkInsRepository.findById(checkInId)

        if (!checkIn) {
            throw new ResourceNotFoundError()
        }

        const distanceInMinutesFromCheckInsCreation = dayjs(new Date()).diff(
            checkIn.created_at,
            'minutes'
        )

        if (distanceInMinutesFromCheckInsCreation > 20) {
            throw new LateCheckInValidationError()
        }

        checkIn.validated_at = new Date()

        await this.checkInsRepository.save(checkIn)

        return {
            checkIn,
        }
    }
}
