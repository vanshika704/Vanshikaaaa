import { FlipWords } from "./flipwords";

export function FlipWordsDemo() {
  const words = ["React", "Flutter", "Firebase", "Node"];

  return (
    <div className="h-[40rem] flex absolute left-4 sm:left-10 items-center px-4">
      <div className="text-4xl sm:text-2xl sm:mt-20 sm:ml-36 md:text-6xl md:ml-20 lg:text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        Hey Everyone !!!<br /> I am a
        <FlipWords words={words} /> <br />
        Developer
      </div>
    </div>
  );
}
