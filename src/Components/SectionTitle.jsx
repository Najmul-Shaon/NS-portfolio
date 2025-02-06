const SectionTitle = ({ header }) => {
  return (
    <div>
      <h3 className="text-center text-2xl md:text-4xl font-bold text-primaryColor">
        {header}
      </h3>
    </div>
  );
};

export default SectionTitle;
