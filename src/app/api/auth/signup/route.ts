import { getErrorMessage } from "@/utils/getErrorMesdsage";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  try {
    const data = await request.json();

    console.log(data);

    const { email, username, password } = data;

    const { data: newUser, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(newUser, error);

    // const user = await User.findOne({ email });

    // if (user) {
    //   return NextResponse.json(
    //     { error: "Email already exists " },
    //     { status: 400 }
    //   );
    // } else {
    //   await User.create({ email, username, password: hashedPassword });

    return NextResponse.json(
      { message: "User created successfully" },
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
