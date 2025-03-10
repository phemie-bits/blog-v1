//TEMPORARY DATA
// const users = [
//     {id:1, name:'John'},
//     {id:2, name: 'Jane'},
//     {id:3, name: 'Jean'},
//     {id:4, name: 'Jane'},
// ]

import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const posts = [
//     {id:1, title:'Post 1', body: '.......', userId:1},
//     {id:2, title:'Post 2', body: '.......', userId:2},
//     {id:3, title:'Post 3', body: '.......', userId:3},
//     {id:4, title:'Post 4', body: '.......', userId:4},

// ]

export async function getPosts(){
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err){
        throw new Error("Failed to fetch posts");
    }
}

export async function getPost(slug){
    try{
        connectToDb();
        const post = await Post.findOne({slug: slug});
        return post;
    } catch (err){
        throw new Error("Failed to fetch post");
    }
}

export async function getUser(id){
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err){
        throw new Error("Failed to fetch user");
    }
}

export async function getUsers(){
    try{
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err){
        throw new Error("Failed to fetch users");
    }
}