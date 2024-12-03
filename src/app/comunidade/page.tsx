'use client'; 
import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function ProfilePage() {
  const [profileRating, setProfileRating] = useState(3); 

  const handleProfileRating = (value: number) => {
    setProfileRating(value);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };
  

  const renderFixedStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  const [activeTab, setActiveTab] = useState<'materiais' | 'avaliacoes'>('materiais');

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
