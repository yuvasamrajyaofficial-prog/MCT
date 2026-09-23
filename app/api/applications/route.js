import { NextResponse } from "next/server";
import { getApplications, saveApplication } from "@/lib/db";

export async function GET() {
  try {
    const applications = await getApplications();
    return NextResponse.json({ success: true, applications });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.fullName || !body.email || !body.role) {
      return NextResponse.json(
        { success: false, error: "Full name, email, and role are required" },
        { status: 400 }
      );
    }

    const saved = await saveApplication({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || "",
      role: body.role,
      experience: body.experience || "1-3 years",
      portfolio: body.portfolio || "",
      skills: body.skills || "",
      resumeNote: body.resumeNote || "",
    });

    return NextResponse.json({ success: true, application: saved }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
