import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

type EventType = "user.created" | "user.updated" | "session.created";
type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export async function POST(req: Request) {
  console.log(req);
  const clerkSecret = process.env.CLERK_WEBHOOK_SECRET || "test-secret";
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";

  const body = await req.text();

  const sivx = new Webhook(clerkSecret);
  let evt: Event | null = null;

  try {
    evt = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as Event;
  } catch (err) {
    return new Response("Bad Request " + err, { status: 400 });
  }

  // Rest

  try {
    // ✅ Extract user data
    //
    const eventType = evt.type;
    const clerk_id = evt?.data?.id as string;
    const clerk_id_for_session = evt.data.client_id as string;

    console.log("🔔 Clerk Webhook Received:", clerk_id);

    switch (eventType) {
      case "user.created":
        await createUser(clerk_id);
        break;
      case "session.created":
        await createUser(clerk_id_for_session);
        break;
      default:
        console.log("Unhandled event type:", eventType);
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Clerk Webhook Error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 },
    );
  }
}

async function createUser(clerk_id: string): Promise<void> {
  const existingUser = await prisma.user.findUnique({
    where: {
      clerk_id: clerk_id,
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        clerk_id,
      },
    });
  }
}
