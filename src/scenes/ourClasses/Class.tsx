type Props = { image: string; name: string; description?: string };

const Class = ({ image, name, description }: Props) => {
  const overlayStyles: string =
    "p-5 absolute z-20 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90";

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <h2 className="text-2xl">{name}</h2>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={image} />
    </li>
  );
};

export default Class;
