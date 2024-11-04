import React from "react";

const Card = ({ imageSrc, title, content = [], buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 p-4 rounded-xl">
      <img className="w-full h-[25rem] object-cover" src={imageSrc} alt={title} />
      <div className="mt-4 text-xl oswald-bold text-white">{title}</div>
      <div className="mt-2 text-gray-400 open-sans-regular text-sm">
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-customRed hover:bg-white hover:text-customRed border border-customRed text-white oswald-bold py-2 px-4 rounded-md"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
