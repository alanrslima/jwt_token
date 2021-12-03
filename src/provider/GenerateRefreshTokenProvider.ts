import { client } from "../prisma/client"
import dayjs from 'dayjs';


class GenerateRefreshTokenProvider {
  async execute(userId: string) {
    const expiresIn = dayjs().add(15, "seconds").unix();

    const generateRefreshTokenProvider = await client.refreshToken.create({
      data: {
        userId,
        expiresIn
      }
    })

    return generateRefreshTokenProvider;
  }
}

export { GenerateRefreshTokenProvider }