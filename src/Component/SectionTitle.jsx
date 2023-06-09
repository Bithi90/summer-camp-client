

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="md:w-4/12 my-8 mx-auto text-center">
        <p className="text-orange-400 text-xl font-bold mb-2">{subHeading}</p>
        <h3 className="text-4xl font-bold uppercase border-y-4 py-4">{heading}</h3>
    </div>
    );
};

export default SectionTitle;