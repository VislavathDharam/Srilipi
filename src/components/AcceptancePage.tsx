import { useEffect, useState } from 'react';
import { Heart, Sparkles, Stars } from 'lucide-react';

export default function AcceptancePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-rose-500 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Heart
              size={16 + Math.random() * 24}
              className="text-white/30"
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      <div className={`max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="flex justify-center mb-8">
          <div className="relative animate-pulse">
            <Heart className="text-red-500" size={80} fill="currentColor" />
            <Sparkles className="absolute -top-3 -right-3 text-yellow-400" size={32} />
            <Stars className="absolute -bottom-2 -left-2 text-pink-400" size={28} />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 animate-pulse">
          YES! 🎉
        </h1>

        <div className="space-y-6 mb-10 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Srilipi, you just made me the happiest person alive! 💝
          </p>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            From the moment I met you, I knew there was something special about you. Your laughter is my favorite melody, and your smile is the sunshine that brightens my darkest days.
          </p>

          <p className="text-lg md:text-xl text-gray-600">
            You're not just beautiful on the outside, but your kindness, your warmth, and your incredible spirit make you absolutely extraordinary. Every conversation with you feels like a gift, and every moment we share becomes a treasured memory.
          </p>

          <p className="text-xl text-rose-600 font-semibold">
            I promise to always make you smile, to be there through every joy and challenge, and to cherish every single moment we have together. ✨
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-rose-200 mb-8">
          <img
            src="/IMG_2889.jpeg"
            alt="Srilipi"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-center space-y-4">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
            Happy Valentine's Day, my love! 💕
          </p>
          <p className="text-xl text-gray-600 italic">
            Here's to many more beautiful moments together... 🌹
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              size={32}
              className="text-red-500 animate-pulse"
              fill="currentColor"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
