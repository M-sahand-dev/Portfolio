export interface MobileNavProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface NavItem {
  id: string;
  label: string;
  link: string;
}
export interface NavMobileProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}
export interface DescriptionProps {
    name : string;
    family : string;
    skils : string;
    info : string;
}