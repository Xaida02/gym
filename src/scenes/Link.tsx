import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePageId = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePageId ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePageId}`}
      onClick={() => setSelectedPage(lowerCasePageId)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
