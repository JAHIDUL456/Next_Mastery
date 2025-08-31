
import React from "react";


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
})

{
  
  return (
   <div>
    <nav>Hi | Me</nav>
        {children}

   </div>
        
    
  );
}
