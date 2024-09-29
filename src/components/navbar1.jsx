import { FloatingDock } from "./floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHome,
  IconFileCode,
  IconFileText,
  IconSettings,
} from "@tabler/icons-react";

import MyBook from "./mybook";
export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconFileCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: {MyBook},
    },
    {
      title: "About",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Vanshika310819?t=9aIZ5qobM626GtHUScS_5Q&s=08",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/vanshika-sharma-b1387428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/vanshika704",
    },
  ];

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-full flex lg:justify-center sm:justify-start p-2">
      <div className="flex items-center space-x-4 bg-gray-50 dark:bg-neutral-900 rounded-full shadow-sm shadow-white p-2">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
