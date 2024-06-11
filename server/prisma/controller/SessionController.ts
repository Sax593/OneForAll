import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getSessions = async (req: any, res: any) => {
  const sessions = await prisma.session.findMany();
  res.json(sessions);
};

const getSessionById = async (req: any, res: any) => {
  const sessionId = parseInt(req.params.id);
  const session = await prisma.session.findUnique({
    where: {
      idSession: sessionId,
    },
  });
  res.sendStatus(200).json(session);
};

const createSession = async (req: any, res: any) => {
  const { name, combined_datetime, type_training } = req.body;
  const idAspirant = parseInt(req.body.idAspirant);
  const idMentor = parseInt(req.body.idMentor);
  const idGame = parseInt(req.body.idGame);
  const newSession = await prisma.session.create({
    data: {
      name: name,
      combined_datetime: combined_datetime,
      type_training: type_training,
      idAspirant: idAspirant,
      idMentor: idMentor,
      idGame: idGame,
    },
  });
  res.json(newSession);
};

const updateSession = async (req: any, res: any) => {
  const idSession = parseInt(req.body.id);
  const { name, combined_datetime, type_training } = req.body;
  const idAspirant = parseInt(req.body.idAspirant);
  const idMentor = parseInt(req.body.idMentor);
  const idGame = parseInt(req.body.idGame);
  const updateSession = await prisma.session.update({
    where: {
      idSession: idSession,
    },
    data: {
      name: name,
      combined_datetime: combined_datetime,
      type_training: type_training,
      idAspirant: idAspirant,
      idMentor: idMentor,
      idGame: idGame,
    },
  });
};

const deleteSession = async (req: any, res: any) => {
  const idSession = parseInt(req.params);
  const session = await prisma.session.delete({
    where: {
      idSession: idSession,
    },
  });
  res.json(session);
};

module.exports = {
  getSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
};
