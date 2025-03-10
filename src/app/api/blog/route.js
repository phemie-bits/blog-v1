import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET (request){
    try{
        connectToDb()
        const posts = await Post.find()
        return NextResponse.json(posts)
    }
    catch(err){
        console.log(err)
        throw new Error("failed to fetch posts");
    }
}