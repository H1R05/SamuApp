interface CounterCardProps {
  number: number | string;
  label: string;
  Icon: React.ElementType;
}

const CounterCard = ({ number, label, Icon }: CounterCardProps) => (
  <div className="bg-gradient-to-r cursor-default from-slate-50 to-slate-200 px-8 py-6 rounded-lg shadow-lg hover:shadow-silver hover:bg-night hover:text-verdigris hover:scale-110 transform duration-300">
    <h2 className="text-4xl font-bold text-redCrayola">{number}</h2>
    <p className="mt-2 bg-gradient-to-r from-slate-500 to-slate-900 bg-clip-text text-transparent font-medium">
      {label}
    </p>
    <Icon className="text-5xl mx-auto" />
  </div>
);

export default CounterCard;
