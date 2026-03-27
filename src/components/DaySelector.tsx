import React from 'react';

const VI_DAYS = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const RANGE = 7; // days before and after today

function startOfDay(d: Date): Date {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function generateDays(center: Date): Date[] {
  return Array.from({ length: RANGE * 2 + 1 }, (_, i) => {
    const d = new Date(center);
    d.setDate(d.getDate() + (i - RANGE));
    return d;
  });
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(d: Date): string {
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${mm}.${dd}`;
}

interface DaySelectorProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ value, onChange }) => {
  const today = React.useMemo(() => startOfDay(new Date()), []);
  const days = React.useMemo(() => generateDays(today), [today]);

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const todayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    const todayEl = todayRef.current;
    if (container && todayEl) {
      container.scrollLeft =
        todayEl.offsetLeft - container.clientWidth / 2 + todayEl.clientWidth / 2;
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-px h-15.25 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {days.map((day, idx) => {
        const isActive = isSameDay(day, value);
        const isToday = isSameDay(day, today);
        return (
          <div
            key={idx}
            ref={isToday ? todayRef : undefined}
            className={`shrink-0 flex flex-col items-center justify-center gap-2 px-1 py-2.5 rounded-lg cursor-pointer w-16.5 text-center ${isActive ? 'bg-brand/10' : ''}`}
            onClick={() => onChange(day)}
          >
            <span
              className={`text-title-sm whitespace-nowrap w-full ${isActive ? 'text-brand font-medium' : 'text-muted'}`}
            >
              {VI_DAYS[day.getDay()]}
            </span>
            <span
              className={`text-body-lg font-medium w-full ${isActive ? 'text-brand' : 'text-deep'}`}
            >
              {formatDate(day)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DaySelector;
