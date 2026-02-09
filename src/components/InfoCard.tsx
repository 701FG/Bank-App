import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  footer?: ReactNode;
}

const InfoCard = ({ title, description, footer }: InfoCardProps) => {
  return (
    <section className="info-card">
      <h2 className="info-card__title">{title}</h2>
      <p className="info-card__description">{description}</p>
      {footer ? <div className="info-card__footer">{footer}</div> : null}
    </section>
  );
};

export default InfoCard;
