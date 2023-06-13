import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default async function auth(req, res) {
  const providers = [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        try {
            const res = await fetch("http://91.150.170.204:9022/rest-auth/login/", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
              

          if (res.ok) {
            return user
          }
          throw new Error("Error logging in")
          return null
        } catch (e) {
            throw new Error("Error logging in")
            return null
        }
      },
    }),
  ]

  const isDefaultSigninPage =
    req.method === "GET" && req.query.nextauth.includes("signin")

  // Hide Sign-In with Ethereum from default sign page
  if (isDefaultSigninPage) {
    providers.pop()
  }

  const jwt = async ({ token, user }) => {
    // first call of jwt function just user object is provided
    if (user?.email) {
      return { ...token, ...user };
    }
  
    // on subsequent calls, token is provided and we need to check if it's expired
    if (token?.accessTokenExpires) {
      if (Date.now() / 1000 < token?.accessTokenExpires) return { ...token, ...user };
    } else if (token?.refreshToken) return refreshAccessToken(token);
  
    return { ...token, ...user };
  };

  return await NextAuth(req, res, {
    // https://next-auth.js.org/configuration/providers/oauth
    providers,
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async session({ session,token, user }) {
        session.token = token.access
        return session
      },
      jwt,
    },
  })
}