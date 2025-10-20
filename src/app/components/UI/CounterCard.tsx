interface CounterCardProps {
  number: number | string;
  label: string;
  Icon: React.ElementType;
}

const CounterCard = ({ number, label, Icon }: CounterCardProps) => (
  <div
    className="
      bg-gray-800 rounded-xl p-8 h-full text-center transition-all duration-300 relative 
      border border-gray-700 cursor-default
      hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/40 hover:scale-[1.02]
    "
  >
    <Icon className="text-5xl mx-auto text-yellowLight mb-4" />

    <h2 className="text-5xl font-extrabold text-white mb-1">{number}</h2>

    <p className="mt-1 text-gray-400 font-medium">{label}</p>
  </div>
);

export default CounterCard;
