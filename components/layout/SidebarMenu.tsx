import { PrismicLink } from "@prismicio/react";
import { useState } from "react";
import { MenuSlice, MenuSliceDefaultItem } from "types/types.generated";
import { useRouter } from "next/router";
import { FilledContentRelationshipField } from "@prismicio/types";
import ClosedChevronIcon from "../../icons/ChevronRightIcon";
import OpenedChevronIcon from "../../icons/ChevronDownIcon";
import { useLayoutContext } from "@lib/layoutProvider";

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
      className="my-1 flex w-full items-center whitespace-nowrap rounded-lg p-2 pl-5 text-sm font-normal text-gray-900 hover:bg-slate-50"
      style={
        currentSlug === link.uid
          ? { backgroundColor: "rgb(248 250 252)" }
          : undefined
      }
      title={label}
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
    <>
      {"url" in item.primary.link ? (
        <NavLink
          label={item.primary.label as string}
          link={item.primary.link as FilledContentRelationshipField}
          currentSlug={currentSlug}
        />
      ) : (
        <li>
          <button
            type="button"
            className="group flex w-full items-center rounded-lg p-2 text-sm font-normal text-slate-900 hover:bg-slate-50"
            onClick={() => setShowSubItems(!showSubItems)}
          >
            {showSubItems ? <OpenedChevronIcon /> : <ClosedChevronIcon />}
            <span className="flex-1 whitespace-nowrap text-left">
              {item.primary.label}
            </span>
          </button>
          {showSubItems && (
            <ul className="list-none pl-2">
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
      )}
    </>
  );
};

const SidebarMenu = () => {
  const { menuDocument } = useLayoutContext();
  const { query } = useRouter();
  if (!menuDocument) return null;

  const firstLevelItems = menuDocument.data.slices;

  return (
    <nav>
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
    </nav>
  );
};

export default SidebarMenu;
