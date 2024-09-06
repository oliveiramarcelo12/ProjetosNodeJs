import User from "@/models/User";
import { NextResponse } from "next/server";
import connectMongo from "@/utils/dbConnect";

export async function POST(request) {
    const data = await request.json();
    
    // Conecta ao MongoDB
    await connectMongo();

 try {
        
      const user=  await User.create(data);
        return NextResponse.json({ success: true, data:user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
