import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Hi | Me</nav>
        {children}
      </body>
    </html>
  );
}
