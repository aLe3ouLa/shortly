interface CardProps {
  icon: string;
  title: string;
  content: string;
}

export const Card = ({ icon, title, content }: CardProps) => (
  <article className="flex flex-col w-60 h-44 bg-white justify-start text-left p-4 relative rounded-md">
    <img
      width="40"
      src={icon}
      alt={title}
      className="bg-slate-600 p-2 rounded-full absolute -top-6 left-0"
    />
    <h2 className="font-bold text-md mb-2 text-[#252329]">{title}</h2>
    <p className="text-sm text-[#9E9AA7]">{content}</p>
  </article>
);
