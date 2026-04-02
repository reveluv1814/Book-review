import jwt from "jsonwebtoken";
import config from "./config";
import { JWTPayload } from "@/src/types/types";

const secret = config.JWT_SECRET as string;

export function signToken(payload: JWTPayload) {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, secret) as JWTPayload;
}
