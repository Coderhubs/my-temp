import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;  // Optional className prop
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`card ${className || ""}`}>{children}</div>
);
