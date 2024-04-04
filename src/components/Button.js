const colorClasses = {
  blue: 'bg-blue-500 hover:bg-blue-700',
  green: 'bg-green-500 hover:bg-green-700',
  red: 'bg-red-500 hover:bg-red-700',
  gray: 'bg-gray-500 hover:bg-gray-700',
  // 추가 색상 정의...
};

const Button = ({ className, value, onClick, color = 'blue' }) => (
  <button
    className={`${className} ${colorClasses[color]} text-white font-bold py-2 px-4 rounded`}
    onClick={onClick}
  >
    {value}
  </button>
);
export default Button;
