"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export async function loginWithGitHubHandler() {
  await signIn("github");
}

export async function logoutHandler(e) {
  await signOut();
}

export async function registerHandler(prevState, formData) {
  const { username, email, password, img, password_repeat } =
    Object.fromEntries(formData);
  if (password !== password_repeat) {
    return { error: "Passwords do not match" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
}

export async function loginHandler(prevState, formData) {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.code === "credentials") {
      return { error: "Invalid username or password" };
    }
    console.log("the error is: ", err);
    //return { error: "Something went wrong" };//would cause a NEXT_REDIRECT error
    throw err;
  }

  // Manual Redirection
  // const { username, password } = Object.fromEntries(formData);

  // try {
  //   await signIn("credentials", { username, password });
  // } catch (err) {
  //   console.log("the error is: ",err);

  //   if (err.code === "credentials") {
  //     return { error: "Invalid username or password" };
  //   }
  //   if (err.digest) {
  //     console.log("Redirect error :", err);
  //     return { error: "Redirect Error" };
  //   }

  //   return { error: "Something went wrong" }; //some different kind of error
  // }
  // return {message: "success"};"##"
}

//ADMIN FUNCTIONS
export async function addPost(prevState, formData) {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
}

export async function deletePost(formData) {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
}

export async function addUser(prevState, formData) {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
}

export async function deleteUser(formData) {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
    //revalidatePath("/blog");//I'm guessing this should be there also after all we remove some posts after removing the creator of such posts, but since nagivating to a new route by button clicks causes revalidation(since by default nextjs does 'no-cache'),that wont be necessary
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
}
