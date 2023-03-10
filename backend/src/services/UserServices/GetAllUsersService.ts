import prismaClient from "../../lib";

class GetAllUsersService {
  async execute() {
    const getUsers = await prismaClient.user.findMany()

    const users = getUsers.map(item => {
      return { 
        id: item.id, 
        name: item?.name ,
        email: item.email
      };
    });
    
    return users
  }
}

export { GetAllUsersService }