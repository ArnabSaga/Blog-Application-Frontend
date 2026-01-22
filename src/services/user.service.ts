import { cookies } from "next/headers";

export const userService = {
  getSession: async function () {
    try {
      const cookiesStore = await cookies();

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookiesStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (session === null) {
        return { data: null, error: { message: "Session is missing...." } };
      }

      return { data: session, error: null };
    } catch (err) {
      console.error(err);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },
};
