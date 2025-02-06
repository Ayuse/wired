"use client";

import { useState, useEffect, useRef } from "react";
import { Circle, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Reminder = {
  id: number;
  text: string;
  isChecked: boolean;
};

// Move variants above the component
const variants = {
  initial: (direction: number) => ({
    y: `${50 * direction}%`,
    filter: "blur(10px)",
    opacity: 0,
    scale: 0.1,
  }),
  active: {
    y: "0%",
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    y: `${-50 * direction}%`,
    filter: "blur(10px)",
    opacity: 0,
    scale: 0.1,
  }),
};

export default function Component() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, text: "Dev mock interview with Isaac", isChecked: false },
    { id: 2, text: "Review pull requests", isChecked: false },
    { id: 3, text: "Update project documentation", isChecked: false },
  ]);

  const reminderCount = reminders.filter(
    (reminder) => !reminder.isChecked
  ).length;
  const prevCountRef = useRef(reminderCount); // Track previous reminder count
  const [direction, setDirection] = useState<number | undefined>(
    reminderCount > prevCountRef.current ? 1 : -1
  );

  const handleToggle = (id: number) => {
    setReminders((prevReminders) => {
      const updatedReminders = prevReminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, isChecked: !reminder.isChecked }
          : reminder
      );

      // Calculate new count
      const newCount = updatedReminders.filter(
        (reminder) => !reminder.isChecked
      ).length;

      // Determine direction
      setDirection(newCount > reminderCount ? 1 : -1);

      return updatedReminders;
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-64 bg-gray-900 rounded-3xl p-4 text-white font-sans drop-shadow-xl border-4 border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-orange-400">Reminders</h2>
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.div
              key={`reminder-count-${reminderCount}`}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              transition={{ type: "spring", duration: 1 }}
              className="text-[30px] font-semibold"
              custom={direction}
            >
              {reminderCount}
            </motion.div>
          </AnimatePresence>
        </div>
        {reminders.map((reminder) => (
          <div key={reminder.id} className="flex items-start space-x-3 mb-3">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={reminder.isChecked}
                onChange={() => handleToggle(reminder.id)}
              />
              {reminder.isChecked ? (
                <CheckCircle className="w-6 h-6 mt-1 text-orange-300 flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 mt-1 text-gray-500 flex-shrink-0" />
              )}
              <span
                className={`text-lg leading-tight transition-all duration-300 ${
                  reminder.isChecked ? "line-through text-orange-300" : ""
                }`}
              >
                {reminder.text}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
