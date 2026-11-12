import type { IconType } from "react-icons";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

export interface SocialLinkItem {
  id: string;
  label: string;
  url: string;
  icon: IconType;
}

export const links: LinkItem[] = [
  { id: "vrumvrum", title: "VRUMVRUM DOS CRIAS", url: "https://vrumvrum.vercel.app/" },
  { id: "chefbo", title: "ChefBô - Projeto Integrador 4", url: "https://www.youtube.com/watch?v=LylmFKG2jUs" },
  { id: "luvita", title: "Luvita Diesel Auto Peças", url: "https://www.luvitadiesel.com.br/" },
  { id: "pokeapi", title: "PokeAPI", url: "https://pokeapi-one-gamma.vercel.app/" },
  { id: "scalene-cover", title: "Scalene - Sonhador (Cover)", url: "https://www.youtube.com/watch?v=gxyDKRJAo5I" },
];

export const socialLinks: SocialLinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/otavioroschel", icon: IoLogoGithub },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/otavioroschel.vlrs", icon: IoLogoInstagram },
  { id: "youtube", label: "YouTube", url: "https://www.youtube.com/otavioroschel", icon: IoLogoYoutube },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/", icon: IoLogoLinkedin },
];

export const profile = {
  name: "@otavioroschel",
};
