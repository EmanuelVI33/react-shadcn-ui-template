export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Microservicios",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Categorias",
      href: "/categories",
    },
    {
      title: "Productos",
      href: "/products",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}