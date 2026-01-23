import { env } from "@/env";

const API_URL = env.API_URL;

export const blogService = {
  getBlogPost: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`);

      const data = await res.json();

      /* Example
        if (data.suceess) {
            return
        }
        */
      return { data: data, error: null };
    } catch (err) {
      return { data: null, err: { message: "Something went wrong" } };
    }
  },
};
