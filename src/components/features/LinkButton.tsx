interface LinkButtonProps {
  title: string;
  url: string;
}

export default function LinkButton({ title, url }: LinkButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 items-center justify-center rounded-lg border border-black/50 bg-black/5 px-6 text-black backdrop-blur-[4px] transition-all duration-150 hover:border-[1.5px] hover:border-black hover:bg-black/[0.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white/50 dark:bg-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white/5 dark:focus-visible:outline-white"
    >
      <span className="flex-1 text-center text-[16px] font-medium leading-6">
        {title}
      </span>
    </a>
  );
}
