interface LinkProps {
  original: string;
  short_link: string;
}

export const Link = ({ original, short_link }: LinkProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white rounded-md mb-4">
      <p className="text-sm">{original}</p>
      <div className="flex items-center">
        <p className="font-bold text-sm text-[#29C7C7] mr-4">{short_link}</p>{' '}
        <button className="bg-[#29C7C7] text-white px-5 py-1 rounded-md hover:bg-[#29C7C7]/50">
          Copy
        </button>
      </div>
    </div>
  );
};
