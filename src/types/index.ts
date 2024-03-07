import { FeatherIcon } from "feather-icons";

export interface MenuProps {
  menu: {
    menu: string;
    items: {
      title: string;
      url: string;
      icon: string;
    }[];
  }[];
}

export interface CardAnaliticProps {
  type: "primary" | "warning" | "success" | "danger";
  icon: string;
  title: string;
  value: number;
  description?: string;
}
