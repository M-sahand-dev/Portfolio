import type { JSX } from 'react';

/**
 * Footer_Container_Link - Container component for footer navigation links
 *
 * @param {ReactNode} children - Child Link components to be rendered
 *
 * Features:
 * - Creates horizontal list of footer links
 * - Consistent spacing between links
 * - Flexible container for any number of links
 * - Responsive by default (works with parent flex configurations)
 */
export const FooterContainerLink = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    /*
     * Unordered list with:
     * - Flex display for horizontal layout
     * - Consistent 1.5rem (6) spacing between items
     * - Takes children to compose with Footer_Link components
     */
    <ul className="flex space-x-6">{children}</ul>
  );
};
