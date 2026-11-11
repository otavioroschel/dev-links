interface ProfileProps {
  avatarSrc: string;
  name: string;
}

export default function Profile({ avatarSrc, name }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-2 px-6 py-6">
      <img
        src={avatarSrc}
        alt={`Foto de perfil de ${name}`}
        className="size-[112px] rounded-full"
      />
      {/* Peso Regular no desktop e Medium no mobile, conforme os frames do Figma */}
      <p className="font-medium text-[16px] leading-6 text-white md:font-normal dark:text-black">
        {name}
      </p>
    </section>
  );
}
