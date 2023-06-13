import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default async function auth(req, res) {
  const providers = [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        try {
            const res = await fetch("https://localhost:7060/api/auth/login/", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              console.log(res)
              const user = await res.json()
              conosle.log(user)

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
        session.token = token.token
        return session
      },
      jwt,
    },
  })
}