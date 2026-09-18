function InfoSection({ title, children }) {
  return (
    <section className="w-full max-w-3xl flex flex-col">
      <span className="text-[25px] font-bold text-gray-600">
        {title}
      </span>

      <span>
        {children}
      </span>
    </section>
  );
}

export default InfoSection;