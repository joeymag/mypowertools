import connect from "@/components/db";
import ToolData from "@/models/ToolData";
import { NextResponse } from "next/server";


export async function GET() {  
  try {
      await connect();
      const tools = await ToolData.find({});
      return NextResponse.json(tools);

  }
  catch (error) {
    return new NextResponse("Error in geting user" + error, {status: 500})

  }
}


export async function POST(request)  {
    const body = await request.json();
    await connect();
    const newtool = new ToolData(body);
    await newtool.save();
    return NextResponse.JSON({message: "task complet"});
 
}