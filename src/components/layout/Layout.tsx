import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div dir="rtl" className="px-4 md:px-2 lg:px-44">
      {children}
    </div>
  );
}

