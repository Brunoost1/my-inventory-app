import React from "react";

interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  color: "teal" | "red";
  text: string;
}

const ButtonDelete: React.FC<ActionButtonProps> = ({ onClick, disabled = false, loading = false, color, text }) => {
  const colorClasses = color === "teal"
    ? "from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800 shadow-teal-500/50 dark:shadow-teal-800/80"
    : "from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800 shadow-red-500/50 dark:shadow-red-800/80 dark:shadow-lg font-bold ";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-gradient-to-r ${colorClasses} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? "Processing..." : text}
    </button>
  );
};

export default ButtonDelete;
