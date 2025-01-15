import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  end: number;
  label: string;
  duration?: number;
  suffix?: string;
}

export default function StatCounter({ end, label, duration = 2.5, suffix = '' }: StatCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        {inView ? (
          <CountUp
            end={end}
            duration={duration}
            suffix={suffix}
            separator=","
          />
        ) : (
          '0'
        )}
      </div>
      <div className="text-gray-400 mt-2">{label}</div>
    </div>
  );
}