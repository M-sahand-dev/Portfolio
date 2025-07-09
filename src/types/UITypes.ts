export interface MobileNavProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface NavItem {
  id: string;
  label: string;
  link: string;
}
