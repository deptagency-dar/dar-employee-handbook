import { PrismicLink } from "@prismicio/react";
import { useState } from "react";
import {
  MenuDocument,
  MenuSlice,
  MenuSliceDefaultItem,
} from "types/types.generated";
import { useRouter } from "next/router";
import { FilledContentRelationshipField } from "@prismicio/types";
import ClosedChevronIcon from "../../icons/ChevronRightIcon";
import OpenedChevronIcon from "../../icons/ChevronDownIcon";

interface Props {
  menu: MenuDocument;
}

interface NavLinkProps {
  label: string;
  link: FilledContentRelationshipField;
  currentSlug?: string;
}

interface NavItemProps {
  item: MenuSlice;
  subitems: MenuSliceDefaultItem[];
  currentSlug?: string;
}

const NavLink = ({ label, link, currentSlug }: NavLinkProps) => {
  return (
    <li
      className="m-1 flex w-full items-center whitespace-nowrap rounded-lg p-2 pl-5 text-sm font-normal text-gray-900 transition duration-75 hover:bg-slate-50"
      style={
        currentSlug === link.uid
          ? { backgroundColor: "rgb(248 250 252)" }
          : undefined
      }
    >
      <div className="block w-full">
        <PrismicLink field={link}>
          <span className="block truncate">{label}</span>
        </PrismicLink>
      </div>
    </li>
  );
};

const NavItem = ({ item, subitems, currentSlug }: NavItemProps) => {
  const [showSubItems, setShowSubItems] = useState(false);

  return (
    <li>
      {"url" in item.primary.link ? (
        <NavLink
          label={item.primary.label as string}
          link={item.primary.link as FilledContentRelationshipField}
          currentSlug={currentSlug}
        />
      ) : (
        <button
          type="button"
          className="group flex w-full items-center rounded-lg p-2 text-sm font-normal text-gray-900 transition duration-75 hover:bg-slate-50"
          onClick={() => setShowSubItems(!showSubItems)}
        >
          {showSubItems ? <OpenedChevronIcon /> : <ClosedChevronIcon />}
          <span
            className="flex-1 whitespace-nowrap text-left"
            sidebar-toggle-item
          >
            {item.primary.label}
          </span>
        </button>
      )}

      {showSubItems && (
        <ul className="list-none">
          {subitems.map((subitem) => (
            <NavLink
              key={subitem.sub_label}
              label={subitem.sub_label as string}
              link={subitem.sub_link as FilledContentRelationshipField}
              currentSlug={currentSlug}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const SidebarMenu = ({ menu }: Props) => {
  const firstLevelItems = menu.data.slices;
  const { query } = useRouter();

  return (
    <ul>
      {firstLevelItems.map((firstLevelItem) => (
        <NavItem
          key={firstLevelItem.primary.label}
          item={firstLevelItem}
          subitems={firstLevelItem.items}
          currentSlug={query.uid as string}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;
