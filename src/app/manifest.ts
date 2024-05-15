import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EduHub - Học tập thật vui",
    short_name: "EduHub",
    description: "EduHub",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
