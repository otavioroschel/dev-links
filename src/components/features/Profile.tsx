import type { CSSProperties } from "react";

interface ProfileProps {
  avatarSrc: string;
  name: string;
}

export default function Profile({ avatarSrc, name }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-2 px-6 py-6">
      {/* Enquadramento equivalente ao fill "cover" centralizado usado no Figma */}
      <div
        role="img"
        aria-label={`Foto de perfil de ${name}`}
        className="size-[112px] rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${avatarSrc})` } as CSSProperties}
      />
      {/* Peso Regular no desktop e Medium no mobile, conforme os frames do Figma */}
      <p className="font-medium text-[16px] leading-6 text-black md:font-normal dark:text-white">
        {name}
      </p>
    </section>
  );
}
