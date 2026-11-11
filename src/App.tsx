import { useTheme } from "./hooks/useTheme";
import Profile from "./components/features/Profile";
import ThemeToggle from "./components/features/ThemeToggle";
import LinkButton from "./components/features/LinkButton";
import SocialLinks from "./components/features/SocialLinks";
import { links, socialLinks, profile } from "./data/links";

import bgDesktopDark from "./assets/bg-desktop.png";
import bgMobileDark from "./assets/bg-mobile.png";
import bgDesktopLight from "./assets/bg-desktop-light.png";
import bgMobileLight from "./assets/bg-mobile-light.png";
import perfilDark from "./assets/perfil-dark.jpeg";
import perfilLight from "./assets/perfil-light.jpg";

interface BackgroundProps {
  desktopSrc: string;
  mobileSrc: string;
}

/*
 * A imagem de fundo é raster e já contém os gradientes do design.
 * O <picture> escolhe a versão desktop ou mobile conforme a largura
 * da viewport, e o object-cover reproduz o comportamento de cover.
 */
function Background({ desktopSrc, mobileSrc }: BackgroundProps) {
  return (
    <picture aria-hidden="true">
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover select-none"
      />
    </picture>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-[#121214] dark:bg-white">
      <Background
        desktopSrc={isDark ? bgDesktopDark : bgDesktopLight}
        mobileSrc={isDark ? bgMobileDark : bgMobileLight}
      />

      {/* Conteúdo principal começa a 56px do topo, conforme o Figma */}
      <main className="relative mx-auto w-full max-w-[588px] pt-14">
        <Profile
          avatarSrc={isDark ? perfilDark : perfilLight}
          name={profile.name}
        />

        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <section aria-label="Links personalizados" className="flex flex-col gap-4 px-6 py-6">
          {links.map((link) => (
            <LinkButton key={link.id} title={link.title} url={link.url} />
          ))}
        </section>

        <SocialLinks links={socialLinks} />

        <footer className="px-6 py-6 text-center text-[14px] leading-6 text-black dark:text-white">
          Feito com ♥ pela/por Otávio
        </footer>
      </main>
    </div>
  );
}
