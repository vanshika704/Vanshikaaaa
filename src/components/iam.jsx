
import { FlipWords } from "./flipwords";

export function FlipWordsDemo() {
  const words = ["React", "Flutter", "Firebase", "Node"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I am a
        <FlipWords words={words} /> <br />
       Developer
      </div>
    </div>
  );
}
