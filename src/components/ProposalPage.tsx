import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ProposalPageProps {
  onAccept: () => void;
}

export default function ProposalPage({ onAccept }: ProposalPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);

  useEffect(() => {
    const hearts = document.querySelectorAll('.floating-heart');
    hearts.forEach((heart, index) => {
      (heart as HTMLElement).style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  const handleNoHover = () => {
    const randomX = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
    const randomY = Math.random() * (window.innerHeight - 100) - (window.innerHeight / 2 - 50);

    setNoButtonPosition({ x: randomX, y: randomY });
    setIsNoButtonMoving(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="floating-heart absolute top-20 left-10 text-red-300 opacity-50">
        <Heart size={32} fill="currentColor" />
      </div>
      <div className="floating-heart absolute top-40 right-20 text-pink-300 opacity-50">
        <Heart size={24} fill="currentColor" />
      </div>
      <div className="floating-heart absolute bottom-32 left-1/4 text-rose-300 opacity-50">
        <Heart size={28} fill="currentColor" />
      </div>
      <div className="floating-heart absolute bottom-20 right-1/3 text-red-300 opacity-50">
        <Heart size={36} fill="currentColor" />
      </div>

      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 border-4 border-rose-200">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="text-red-500 animate-pulse" size={64} fill="currentColor" />
            <Sparkles className="absolute -top-2 -right-2 text-yellow-500 animate-spin" size={24} style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-rose-500">
          Hey Srilipi! 💝
        </h1>

        <div className="space-y-6 mb-10 text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Every moment with you feels like a beautiful dream I never want to wake up from...
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            You make my heart skip a beat with your smile, and my world brighter with your presence.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-rose-600 mt-8">
            Will you be my Valentine? 💕
          </p>
        </div>

        <div className="flex gap-6 justify-center items-center flex-wrap">
          <button
            onClick={onAccept}
            className="px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:from-red-600 hover:to-pink-600"
          >
            Yes! 💖
          </button>

          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="px-12 py-4 bg-gray-300 text-gray-700 text-xl font-bold rounded-full shadow-lg transition-all duration-200"
            style={{
              transform: isNoButtonMoving
                ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`
                : 'translate(0, 0)',
              transition: isNoButtonMoving ? 'transform 0.3s ease-out' : 'none',
              position: isNoButtonMoving ? 'relative' : 'static'
            }}
          >
            No
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 italic">
          (There's really only one answer here... 😉)
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .floating-heart {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
