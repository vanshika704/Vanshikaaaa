import { FlipWords } from "./flipwords";

export function FlipWordsDemo() {
  const words = ["React", "Flutter", "Firebase", "Node"];

  return (
    <div className="h-[40rem] flex absolute  sm:left-10 lg:left-0 items-center px-4">
      <div className="text-4xl sm:text-4xl sm:mt-32 sm:ml-36 md:text-6xl md:ml-20 md:mt-60 lg:text-7xl lg:mt-20 mx-auto text-left font-normal text-neutral-600 dark:text-neutral-400 ">
        Hey Everyone !!!<br /> I am a
        <FlipWords words={words} /> <br />
        Developer
      </div>
    </div>
  );
}
