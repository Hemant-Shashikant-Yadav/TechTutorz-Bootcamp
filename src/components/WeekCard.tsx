import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { WeekCardProps } from '../types';

const WeekCard = ({ week, title, description, image, delay = 0 }: WeekCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Animation on mount
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2 + delay,
        ease: 'power2.out',
      }
    );
  }, [delay]);

  // Hover animation
  useEffect(() => {
    const card = cardRef.current;
    
    if (!card) return;
    
    const content = card.querySelector('.card-content');
    const overlay = card.querySelector('.card-overlay');
    
    const enterAnimation = () => {
      gsap.to(content, { y: -10, duration: 0.3, ease: 'power2.out' });
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
    };
    
    const leaveAnimation = () => {
      gsap.to(content, { y: 0, duration: 0.3, ease: 'power2.out' });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
    };
    
    card.addEventListener('mouseenter', enterAnimation);
    card.addEventListener('mouseleave', leaveAnimation);
    
    return () => {
      card.removeEventListener('mouseenter', enterAnimation);
      card.removeEventListener('mouseleave', leaveAnimation);
    };
  }, []);

  // Support for view transitions API if available
  const handleClick = (event: React.MouseEvent) => {
    if (typeof document.startViewTransition === 'function') {
      event.preventDefault();
      const href = (event.currentTarget as HTMLAnchorElement).href;
      document.startViewTransition(() => {
        window.location.href = href;
      });
    }
  };

  return (
    <div ref={cardRef} className="card relative h-[300px] md:h-[350px] group">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="card-overlay absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-900/70 to-transparent opacity-50 transition-opacity"></div>
      
      <div className="card-content absolute inset-0 p-6 flex flex-col justify-end transition-transform z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/week/${week}`}
          onClick={handleClick}
          className="btn-primary inline-flex items-center justify-center w-full"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default WeekCard;