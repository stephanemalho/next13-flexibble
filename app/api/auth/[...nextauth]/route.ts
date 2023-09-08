import { authOptions } from "@/lib/session";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET , handler as POST }; // allow us to use the same route for both GET and POST requests using NextAuth