import { TransactionType } from '../../../app/types/TransactionType';
import { iconsMap } from './iconsMap';

interface CategoryIconProps {
  type: TransactionType;
  category?: string;
}

export function CategoryIcon({ type, category }: CategoryIconProps) {
  const Icon = iconsMap[type][
    category as keyof (typeof iconsMap.OUTCOME | typeof iconsMap.INCOME)
  ] ?? iconsMap[type].default;

  return <Icon />;
}
