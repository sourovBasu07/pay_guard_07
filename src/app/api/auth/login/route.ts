import { getErrorMessage } from "@/utils/getErrorMesdsage";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  try {
    const data = await request.json();

    const { data: loggedIn, error } = await supabase.auth.signInWithPassword(
      data
    );

    if (error) {
      console.log(error);

      return NextResponse.json(
        { message: error.code },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
    // }
  } catch (error: any) {
    return NextResponse.json(
      { message: getErrorMessage(error) },
      { status: 500 }
    );
  }
}
