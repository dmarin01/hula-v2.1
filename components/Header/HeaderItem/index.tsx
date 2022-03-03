function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col group cursor-pointer items-center w-12 sm:w-20 hover:text-white">
     <Icon className="h-8 mb-4 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-95 tracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItem;
