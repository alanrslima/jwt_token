import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "46dad1ae-53e5-11ec-bf63-0242ac130002", {
      subject: userId,
      expiresIn: "20s"
    })

    return token
  }
}

export { GenerateTokenProvider }