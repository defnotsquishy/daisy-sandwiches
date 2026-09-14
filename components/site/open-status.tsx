"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/site-data";

function londonNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const dayLookup: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    day: dayLookup[map.weekday],
    minutes: Number(map.hour) * 60 + Number(map.minute),
  };
}

function minutes(value: string) {
  const [hours, mins] = value.split(":").map(Number);
  return hours * 60 + mins;
}

export function OpenStatus() {
  const [label, setLabel] = useState("Regular hours · open 7 days");

  useEffect(() => {
    const update = () => {
      const now = londonNow();
      const today = business.hours.find((entry) =>
        (entry.days as readonly number[]).includes(now.day),
      );
      if (!today) return;
      const open =
        now.minutes >= minutes(today.opens) &&
        now.minutes < minutes(today.closes);
      setLabel(
        open
          ? `Regular hours · Open until ${today.closes}`
          : `Regular hours · Closed now`,
      );
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return <span>{label}</span>;
}
