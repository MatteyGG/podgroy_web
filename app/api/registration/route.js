import { PrismaClient } from "@prisma/client";
export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const prisma = new PrismaClient();
  const result = await prisma.user.create({
    data: body,
  });
  console.log(result);
  await prisma.$disconnect();
  return Response.json("OK");
}
