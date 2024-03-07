import feather, { FeatherIconNames } from "feather-icons";

type Props = {
  name?: string | FeatherIconNames;
  className?: string;
};

function Icon({ name = "home", className }: Props) {
  const icon = feather.icons[name].toSvg({
    class: className,
    width: "100%",
    height: "100%",
  });
  return <div dangerouslySetInnerHTML={{ __html: icon }} />;
}

export default Icon;
