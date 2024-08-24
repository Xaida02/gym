import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="md:flex justify-between gap-16 mx-auto w-5/6">
        {/* LOGO */}
        <div className="basis-1/2  mt-16">
          <img className="mb-4" src={Logo} alt="" />
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a quae
            inventore explicabo laborum iusto maiores rerum aut aliquid fuga
            amet odit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* LINKS */}
        <div className="basis-1/4 mt-16">
          <h2 className="font-bold mb-4">Links</h2>
          <p className="mb-4">Lorem, ipsum.</p>
          <p className="mb-4">Dolor sit.</p>
          <p>Repudiandae repellat.</p>
        </div>
        {/* CONTACT US */}
        <div className="basis-1/4 mt-16">
          <h2 className="font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Placeat fugit.</p>
          <p className="mb-4">Consectetur sit.</p>
          <p>(333)213-2152.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
