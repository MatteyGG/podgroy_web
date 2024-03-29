import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export async function PUT(req) {
  const data = await req.json();
  const prisma = new PrismaClient();
  console.log(data);

  const session = await getServerSession(authOptions);

  const result = await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      username: data.username,
      phone: data.phone,
    },
  });
  console.log(result);

  await prisma.$disconnect();
  return Response.json({ message: "Profile updated successfully" }, { status: 200 });
}
