import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
    create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
    findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
    findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
    findById(id: string): Promise<CheckIn | null>
    countByUserId(userId: string): Promise<number>
    save(checkIn: CheckIn): Promise<Checkin>
}
