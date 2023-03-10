import { Request, Response } from 'express'
import { GetUserByIdService } from '../../services/UserServices/GetUserByIdService'
import { UpdateUserByIdService } from '../../services/UserServices/UpdateUserByIdService'

class UpdateUserByIdController {
  async handle(request: Request, response: Response) {
    const user_id  = request.params.id
    const { name }  = request.body

    const service = new UpdateUserByIdService()

    const getservice = new GetUserByIdService()
    const user = await getservice.execute(Number(user_id))

    if (user.id) {
      try {
        const result = await service.execute(Number(user_id), name)
        return response.json(result)
      } catch (error: any) {
        return response.status(500).json({ error: error.message })
      }  
    } else {
      return response.status(401).json({ error: 'user does not exists' })
    }
  }
}

export { UpdateUserByIdController }