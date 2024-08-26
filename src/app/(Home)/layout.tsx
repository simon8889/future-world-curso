import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { Loader } from "app/components/shared/Loader";
import { Suspense } from "react";

export default function HomeLayout({ children }: {children: React.ReactNode}){
	return (
     <main>
      <Suspense fallback={<Loader />}>
        <Hero />
        <Description />
    		{ children }
      </Suspense>
    </main>
	)

}