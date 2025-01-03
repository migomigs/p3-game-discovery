import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 flex justfiy-between gap-2 align-center w-auto px-0">
      <AppLogo />
      <div className="flex-1">
        <SearchBar />
      </div>
      <ToggleSwitch />
    </div>
  );
};

export default NavBar;
