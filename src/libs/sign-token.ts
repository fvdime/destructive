import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'

export const signJWT = async (
  payload: { sub: string, email: string },
  options: { exp: string }
) => {
  try {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY)
      )
    ).payload as T;
  } catch (error) {
    console.log(error);
    throw new Error("Your token has expired.");
  }
};

export function getToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return token || "";
}

export function getUserIdFromToken(token: string) {
  try {
    const decodedToken = jwt.decode(token);
    // If decodedToken is null, token is invalid
    if (!decodedToken) {
        throw new Error('Invalid token');
    }
    return decodedToken.sub;
} catch (error) {
    console.error('Error decoding token:', error);
    return null;
}
}