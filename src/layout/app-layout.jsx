  //import React from 'react'

import Header from "@/components/header"
import { Outlet } from "react-router-dom"

  
  const AppLayout = () => {
    return (
      <div>
        <div className="grid-background"></div>
        <main className=" min-h-screen px-6 sm:px-12">
          <Header/>
         <Outlet/>
        </main>
        <div className="p-10 text-center bg-gray-800 mt-10">
              Job portal
        </div>
       
      </div>
    );
  };
  
  export default AppLayout;
  

// import React from 'react';
// import Header from "@/components/header";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div>
//       {/* Background Grid */}
//       <div className="grid-background"></div>

//       {/* Page Layout */}
//       <main className="w-full px-6 sm:px-12">
//         <Header />
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="p-10 text-center bg-gray-800 mt-10">
//         Job portal
//       </footer>
//     </div>
//   );
// };

// export default AppLayout;
