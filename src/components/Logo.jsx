import clsx from "clsx";

const baseImagePath = import.meta.env.BASE_URL;

const Logo = ({
  className,
  alt = "Project tacking logo",
  logo = `${baseImagePath}/logo.svg`,
}) => {
  return (
    <a href="#">
      <img src={logo} alt={alt} className={clsx(className)} />
    </a>
  );
};

Logo.displayName = "Logo";

export default Logo;
