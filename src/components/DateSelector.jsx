import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { CalendarDays } from "lucide-react";

function formatDisplayDate(date) {
  if (!date) return "Select date";

  return new Intl.DateTimeFormat("es-ES").format(date);
}

export function formatApiDate(date) {
  if (!date) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function DateSelector({ selectedDate, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSelect(date) {
    if (!date) return;
    onChange(date);
    setOpen(false);
  }

  function handleToday() {
    onChange(new Date());
    setOpen(false);
  }

  function handleTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    onChange(tomorrow);
    setOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-sm">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-full items-center justify-between rounded-2xl border border-cyan-400/10 bg-black/40 px-4 text-left text-white shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-md transition hover:border-cyan-300/20 hover:bg-black/50"
      >
        <div className="flex items-center gap-3  cursor-pointer">
          <CalendarDays className="h-5 w-5 text-cyan-300" />
          <span className="text-md font-semibold text-zinc-200 w-40">
            {formatDisplayDate(selectedDate)}
          </span>
        </div>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-50 rounded-2xl border border-cyan-400/10 bg-[#060b16]/95 p-4 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-xl">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            showOutsideDays
            className="text-zinc-200"
            classNames={{
              months: "flex flex-col",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-semibold text-white",
              nav: "flex items-center gap-2",
              nav_button:
                "h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 transition",
              table: "w-full border-collapse",
              head_row: "flex",
              head_cell: "w-10 text-xs font-medium text-zinc-500 text-center",
              row: "mt-2 flex w-full",
              cell: "h-10 w-10 text-center text-sm p-0 relative",
              day: "h-10 w-10 rounded-xl text-sm text-zinc-200 hover:bg-cyan-400/10 hover:text-cyan-200 transition",
              day_selected:
                "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:text-slate-950 font-semibold",
              day_today: "border border-cyan-300/40 text-cyan-300",
              day_outside: "text-zinc-600",
              day_disabled: "text-zinc-700 opacity-50",
            }}
          />

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handleToday}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 transition hover:border-cyan-300/20 hover:text-cyan-200"
            >
              Today
            </button>

            <button
              type="button"
              onClick={handleTomorrow}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 transition hover:border-cyan-300/20 hover:text-cyan-200"
            >
              Tomorrow
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
