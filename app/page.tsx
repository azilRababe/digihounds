import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

import { servicesData } from "@/utils/data";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      <HeroBanner />
      <Services />
      <section className="flex flex-wrap justify-center items-center gap-x-5 gap-y-10 ">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard text={item.title} />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              {item.description}
            </h2>
          </div>
        ))}
      </section>
      <section>
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center md:rounded-3xl my-20">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Your Growth is Our Passion
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            We deliver creative, data-driven digital marketing solutions that
            drive growth, turning businesses into industry leaders.
          </p>
        </div>
      </section>
    </div>
  );
}
