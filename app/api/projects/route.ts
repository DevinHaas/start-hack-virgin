import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, description, authorId } = await req.json();
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        authorId,
      },
    });
    console.log(newProject);
    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 },
    );
  }
}
