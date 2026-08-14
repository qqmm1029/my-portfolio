import type { ReactNode } from "react";

interface CardProps {
  title: string;
  emoji?: string;
  children: ReactNode;
}

const Card = ({ title, emoji, children }: CardProps) => {
  return (
    <div className="card">
      <div className="card-title">
        {emoji && <span className="emoji">{emoji}</span>}
        {title}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;