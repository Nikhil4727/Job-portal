import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.jpg"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img src="/images.jpeg" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;


// import React, { useEffect, useRef, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { SignIn } from '@clerk/clerk-react';
// import { Button } from '@/components/ui/button';
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import companies from '../data/companies.json';
// import faqs from '../data/faq.json';
// import Autoplay from 'embla-carousel-autoplay';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
//   const [searchParams] = useSearchParams();
//   const [showSignIn, setShowSignIn] = useState(false);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     if (searchParams.get("sign-in") === "true") {
//       setShowSignIn(true);
//     }
//   }, [searchParams]);

//   // Close on outside click
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setShowSignIn(false);
//       }
//     }

//     if (showSignIn) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showSignIn]);

//   return (
//     <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
//       <section className='text-center'>
//         <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold 
//         sm:text-6xl lg:text-8xl tracking-tighter py-4'>
//           Find Your Dream Job{" "}
//           <span className='flex items-center gap-2 sm:gap-6'>
//             and get{" "}
//             <img 
//               src="/logo.jpg" 
//               alt="Hirred Logo" 
//               className="h-14 sm:h-24 lg:h-32" 
//             />
//           </span>
//         </h1>
//         <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
//           Explore thousands of job listings or find the perfect candidate
//         </p>
//       </section>

//       <div className='flex gap-6 justify-center'>
//         <Link to='/job'>
//           <Button variant="blue" size="xl">
//             Find Job
//           </Button>
//         </Link>

//         <Link to='/post-job'>
//           <Button variant="destructive" size="xl">
//             Post Job
//           </Button> 
//         </Link>
//       </div>

//       <Carousel
//         plugins={[plugin.current]}
//         className="w-full py-10"
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent className="flex gap-5 sm:gap-20 items-center">
//           {companies.map(({ name, path, id }) => (
//             <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
//               <img src={path} alt={name} className="h-9 sm:h-14 object-contain mx-auto" />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>

//       <img src="/images.jpeg" alt="" className='w-full' />

//       <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//         <Card>
//           <CardHeader>
//             <CardTitle>Job Seekers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Search and apply for jobs, track applications, and more.
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>For Employers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Post jobs, manage applications, and find the best candidates.
//           </CardContent>
//         </Card>
//       </section>

//       <Accordion type="single" collapsible>
//         {faqs.map((faq, index) => (
//           <AccordionItem key={index} value={`item-${index + 1}`}>
//             <AccordionTrigger>{faq.question}</AccordionTrigger>
//             <AccordionContent>{faq.answer}</AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>

//       {/* Sign-In Modal with outside click to close */}
//       {showSignIn && (
//         <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center">
//           <div ref={modalRef} className="relative bg-white p-6 rounded-lg">
//             <button
//               onClick={() => setShowSignIn(false)}
//               className="absolute top-2 right-2 text-black text-xl font-bold"
//             >
//               ×
//             </button>
//             <SignIn path="/" />
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default LandingPage;
