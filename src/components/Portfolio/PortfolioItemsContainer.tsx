import type { JSX } from 'react';
import type { PortfolioData } from '../../types';
import { PortforioItem } from './index';

interface PortfolioDataComponent {
  portforioItem: PortfolioData[];
}

export const PortfolioItemsContainer = ({
  portforioItem,
}: PortfolioDataComponent): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Render each portfolio item */}
      {/* {portforioItem.map((item) => (
                <PortforioItem key={item.id} {...item} />
            ))} */}
      {portforioItem.map((item) => (
        <PortforioItem key={item.id} {...item} />
      ))}
    </div>
  );
};
