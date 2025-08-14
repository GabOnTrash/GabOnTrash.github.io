import React from "react";
import "./Card.css";

export default function Card({ icon, label, color, onClick }) 
{
  return (
    <div
        className="card"
        style={{ boxShadow: `0 0 1rem ${color}` }}
        onClick={onClick}>

        {icon && <img src={icon} alt={label} />}
        {label && <span>{label}</span>}

    </div>
  );
}
