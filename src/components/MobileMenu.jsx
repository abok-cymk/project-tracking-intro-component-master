import { forwardRef } from "react";

const MobileMenu = forwardRef(({...props}, ref) => {
  return (
    <nav ref={ref} {...props} className="divide-y divide-Light-Grayish-Blue p-6 bg-white text-lg font-bold uppercase text-Very-Dark-Blue flex flex-col rounded shadow absolute md:hidden top-24 w-[90vw] left-1/2 -translate-x-1/2 z-10 text-center">
      <ul className="flex flex-col gap-3 pb-4">
        <li>
          <a href="#">product</a>
        </li>
        <li>
          <a href="#">features</a>
        </li>
        <li>
          <a href="#">pricing</a>
        </li>
      </ul>
      <ul className="text-Grayish-Blue pt-4">
        <li>
          <a href="#">login</a>
        </li>
      </ul>
    </nav>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
