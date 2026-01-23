import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";

const CountdownTimer = () => {
  // Set target date to February 15, 2026 (next batch start)
  const targetDate = new Date("2026-02-15T09:00:00");
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[70px]">
        <span className="font-display text-xl md:text-3xl font-bold text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-white/70 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-accent/90 to-accent backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-white/10">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-white" />
        <span className="text-white font-semibold text-sm md:text-base">Next Batch Starts In</span>
      </div>
      
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-white text-2xl font-bold">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-white text-2xl font-bold">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <span className="text-white text-2xl font-bold hidden md:block">:</span>
        <div className="hidden md:block">
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-white/80 text-sm">
        <Users className="w-4 h-4" />
        <span><strong className="text-white">Only 8 spots</strong> remaining for February batch</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
