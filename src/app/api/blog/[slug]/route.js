import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET (request, {params}){
    const {slug} = await params;

    try{
        connectToDb()
        const post = await Post.findOne({slug})
        return NextResponse.json(post)
    }
    catch(err){
        console.log(err)
        throw new Error("failed to fetch post");
    }
}


export async function DELEIE (request, {params}){
    const {slug} = await params;

    try{
        connectToDb()
        await Post.deleteOne({slug});
        return NextResponse.json("Post deleted");
    }
    catch(err){
        console.log(err);
        throw new Error("failed to delete post");
    }
}