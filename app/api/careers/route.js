import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzMYp_gcnlY1yOUNWLZtJSeA3sEmAz7jQi1c4DvTVhjuagG4oTTRgwwsuQH8bzPvYsMkw/exec",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...body,
                    type: "career",
                }),
            }
        );

        return NextResponse.json({ status: "success" });
    } catch (err) {
        return NextResponse.json({ status: "error" }, { status: 500 });
    }
}
