import { env } from "@/env";

const API_URL = env.API_URL;

interface ServiceOption {
  cache?: RequestCache;
  revalidate?: number;
}
interface GetBlogsParam {
  isFeatured?: boolean;
  search?: string;
}

//* No Dynamic and No { cache: no-store } : SSG -> Static Page
//* { cache: no-store } : SSR -> Dynamic Page
//* next: { revalidate: 10 } : ISR -> Mix between static and dynamic

export const blogService = {
  getBlogPost: async function (params?: GetBlogsParam, option?: ServiceOption) {
    try {
      const url = new URL(`${API_URL}/posts`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (option?.cache) {
        config.cache = option.cache;
      }

      if (option?.revalidate) {
        config.next = { revalidate: option.revalidate };
      }

      const res = await fetch(url.toString(), config);

      const data = await res.json();

      /* Example
        if (data.suceess) {
            return
        }
        */
      return { data: data, error: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: { message: "Something went wrong" } };
    }
  },

  getBlogId: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);

      const data = await res.json();

      return { data: data, error: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: { message: "Something went wrong" } };
    }
  },
};
