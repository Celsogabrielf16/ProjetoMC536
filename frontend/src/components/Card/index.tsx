import React from "react";
import './card.css';
import { ReactComponent as DownArrowRight } from "../../assets/icons/downArrowRight.svg";
import { ReactComponent as UpArrowRight } from "../../assets/icons/upArrowRight.svg";

const formatToBRL = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

type CardProps = {
    title: string;
    value: number;
    relativeValue: number;
  };


const formatStringH3 = (string: string): JSX.Element => {
    return <h3 className="card__title">
        {string.split("s").map((part, index) => (
            <React.Fragment key={index}>
            {part}
            {index < string.split("s").length - 1 && <b className="moneyDetail">$</b>}
            </React.Fragment>
      ))}
    </h3>
}

const Card: React.FC<CardProps> = ({ title, value, relativeValue }) => {
    const percentage = Math.round((Math.abs(relativeValue) / value) * 100);

    return (
        <div className="CardComponent">
            { formatStringH3(title) }
            <p className="card__value">{ formatToBRL(value) }</p>
            <div className="card__relative-value">
                { relativeValue > value ? 
                    <p className="porcentage porcentage--green"><UpArrowRight /> { percentage } %</p> :
                    <p className="porcentage"><DownArrowRight /> { percentage } %</p>
                }
                <p className="value">{ formatToBRL(relativeValue) }</p>
            </div>
        </div>
    )
}

export default Card;