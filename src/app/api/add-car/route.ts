import { NextResponse } from "next/server";

export async function GET(req: any) {
  return NextResponse.json({ massage: "Successfully" }, { status: 200 });
}
export async function POST(req: any) {
  const data = await req.json();
  console.log(data);
  if (req) {
    return NextResponse.json(
      { massage: "Add Data Successfully" },
      { status: 200 }
    );
  }
}
