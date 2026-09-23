import { NextResponse } from "next/server";
import { getContacts, saveContact } from "@/lib/db";

export async function GET() {
  try {
    const contacts = await getContacts();
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and service are required" },
        { status: 400 }
      );
    }

    const saved = await saveContact({
      name: body.name,
      email: body.email || "",
      phone: body.phone,
      service: body.service,
      message: body.message || "",
    });

    return NextResponse.json({ success: true, contact: saved }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to save contact" },
      { status: 500 }
    );
  }
}
