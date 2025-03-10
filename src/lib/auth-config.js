export const authConfig = {
  pages: {
    signIn: "/login", //if we are not authenticated, we'll be directed to the login page
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRegisterPage =
        request.nextUrl?.pathname.startsWith("/register");

      if (isOnAdminPanel) {
        //console.log("we are on admin");
      }
      //ONLY ADMIN CAN REACH ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnBlogPage && !user) {
        return false;
      }

      //ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        //console.log("I ran login");
        return Response.redirect(new URL("/", request.nextUrl));
      }

      //ONLY UNAUTHENTICATED USERS CAN REACH THE REGISTER PAGE
      if (isOnRegisterPage && user) {
        //console.log("I ran register");
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
