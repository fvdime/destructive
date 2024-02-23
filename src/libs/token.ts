import { signJWT } from "./sign-token";
import { cookies } from "next/headers";

const EXP_TIME = 30 * 24 * 60 * 60 * 1000

export const signToken = async ({ user }: any) => {
  try {
    const token = await signJWT(
      { sub: user.id!, email: user.email! },
      { exp: "72h" }
    );

    console.log("Token signed successfully:", token);

    console.log("NEW USER::::::", JSON.stringify(user));

    console.log("NEW USER ID:", user.id);
    console.log("NEW USER ROLE:", user.role);

    const tokenMaxAge = EXP_TIME * 60;

    const cookieStore = cookies();

    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge
    };

    await Promise.all([
      cookieStore.set(cookieOptions),
      cookieStore.set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge
      })
    ]);

    // return response; // Return the response object
  } catch (error) {
    console.error("Error signing JWT token:", error);
  }
};