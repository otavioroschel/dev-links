import type { ComponentType } from "react";

interface SocialLinkItem {
  id: string;
  label: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

interface SocialLinksProps {
  links: SocialLinkItem[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociais" className="flex justify-center gap-4 px-6 py-6">
      {links.map(({ id, label, url, icon: Icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="flex size-10 items-center justify-center rounded-full text-black transition-colors duration-150 hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-white dark:hover:bg-white/20 dark:focus-visible:outline-white"
        >
          <Icon className="size-6" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
