"use client";

import React, {
  useState,
  useEffect,
  Children,
  ReactNode,
  HTMLAttributes,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initialStep?: number;
  carousel?: boolean;
  carouselInterval?: number;
  className?: string;
}

export default function AutoStepper({
  children,
  initialStep = 1,
  carousel = false,
  carouselInterval = 3000,
  className = "",
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;

  useEffect(() => {
    if (!carousel) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : 1));
    }, carouselInterval);

    return () => clearInterval(interval);
  }, [carousel, carouselInterval, totalSteps]);

  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${className}`}
      {...rest}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {stepsArray[currentStep - 1]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Step({ children }: { children: ReactNode }) {
  return <div className="w-full h-full px-4 py-6">{children}</div>;
}
