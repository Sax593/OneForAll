import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUsers = async (req: any, res: any) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

const getUserById = async (req: any, res: any) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: {
      idUser: userId,
    },
  });
  res.sendStatus(200).json(user);
};

const createUser = async (req: any, res: any) => {
  const { first_name, last_name, date_of_birth, sex, roles } = req.body;
  const newUser = await prisma.user.create({
    data: {
      first_name,
      last_name,
      date_of_birth,
      sex,
      roles,
    },
  });
  res.json(newUser);
};

const updateUser = async (req: any, res: any) => {
  const idUser = parseInt(req.body.id);
  const { first_name, last_name, date_of_birth, sex, roles } = req.body;
  const updateUser = await prisma.user.update({
    where: {
      idUser: idUser,
    },
    data: {
      first_name: first_name,
      last_name: last_name,
      date_of_birth: date_of_birth,
      sex: sex,
      roles: roles,
    },
  });
  res.json(updateUser);
};

const deleteUser = async (req: any, res: any) => {
  const idUser = parseInt(req.params);
  const user = await prisma.user.delete({
    where: {
      idUser: idUser,
    },
  });
  res.json(user);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
