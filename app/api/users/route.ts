import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      include: {
        company: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while fetching the users." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, surname, age, companyId } = await req.json();

    if (!name || !surname || !age || !companyId) {
      return NextResponse.json(
        { error: "Missing required fields: name, surname, age, or companyId" },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof surname !== "string" ||
      typeof age !== "number" ||
      typeof companyId !== "number"
    ) {
      return NextResponse.json(
        { error: "Invalid data types for name, surname, age, or companyId" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        surname,
        age,
        company: {
          connect: { id: companyId },
        },
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while creating the user." },
      { status: 500 }
    );
  }
}
