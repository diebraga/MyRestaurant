import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../lib";

interface UserInterface {
  id?: number;
  name: string | null;
  email: string;
  password: string;
}

function tokenForUser(user: UserInterface) {
  const timestamp = new Date().getTime();
  return sign(
    {
      id: user.id,
      iat: timestamp,
    },
    "345tyujdfghj456yudfghj456yuidfghj456yu",
    {
      expiresIn: "30d",
      subject: String(user.id),
    }
  );
}

class SignUpUserService {
  async execute({ email, password, name }: UserInterface) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new Error("User already exists!");
    }

    if (!password || !password) {
      throw new Error("Email and password must be provided!");
    }

    const passwordHash = await hash(password, 8);

    const createUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    const createUserResponse = {
      user: {
        id: createUser.id,
        name: createUser.name,
        email: createUser.email,
      },
      token: tokenForUser(createUser),
    };

    return createUserResponse;
  }
}

export { SignUpUserService };
