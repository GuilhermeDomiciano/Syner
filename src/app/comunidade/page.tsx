'use client'; 

import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex ">
      <aside className="fixed top-0 left-0 w-1/2 h-full p-8 flex flex-col items-center justify-center bg-white shadow-lg">
        <div className="w-full max-w-md text-center">

        </div>
      </aside>

      <div className="fixed top-0 left-1/2 h-full w-[1px] bg-gray-300"></div>

      <main className="ml-[50%] w-[50%] p-12">
        
      </main>
    </div>
  );
}
