import clsx from "clsx";

export function ExternalLink({
  href,
  title,
  alwaysUnderline = false,
}: {
  href: string;
  title: string;
  alwaysUnderline?: boolean;
}) {
  return (
    <a
      className={clsx("underline", {
        "sm:no-underline sm:hover:underline": !alwaysUnderline,
      })}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
