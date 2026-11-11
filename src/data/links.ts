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

// Substitua os destinos pelos seus endereços pessoais quando necessário.
// As URLs abaixo foram verificadas e apontam para destinos reais.
export const links: LinkItem[] = [
  { id: "curso", title: "Inscreva-se no Curso", url: "https://www.rocketseat.com.br/" },
  { id: "ebook", title: "Baixe meu e-book", url: "https://www.rocketseat.com.br/blog" },
  { id: "portfolio", title: "Veja meu portfólio", url: "https://github.com/" },
  { id: "meu-curso", title: "Conheça meu curso", url: "https://www.rocketseat.com.br/" },
];

export const socialLinks: SocialLinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/", icon: IoLogoGithub },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/", icon: IoLogoInstagram },
  { id: "youtube", label: "YouTube", url: "https://www.youtube.com/", icon: IoLogoYoutube },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/", icon: IoLogoLinkedin },
];

export const profile = {
  name: "@seu.perfil",
};
