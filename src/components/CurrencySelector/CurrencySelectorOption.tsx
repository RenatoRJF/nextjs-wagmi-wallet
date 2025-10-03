import clsx from 'clsx';
import CurrencyIcon from '@/components/CurrencyIcon/CurrencyIcon';

import { CurrencySelectorOptionProps } from './CurrencySelectorOption.types';

export default function CurrencySelectorOption({
  option,
  isSelected,
  onClick,
}: CurrencySelectorOptionProps) {
  return (
    <button
      onClick={() => onClick(option.value)}
      className={clsx(
        "w-full flex items-center gap-3 px-4 py-3 text-left",
        "hover:bg-gray-700/50 transition-colors hover:cursor-pointer",
        "first:rounded-t-lg last:rounded-b-lg",
        isSelected ? "bg-blue-500/20 text-blue-300" : "text-white"
      )}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <CurrencyIcon currency={option.value} />
      </div>
      <span className="font-medium">{option.label}</span>
    </button>
  );
}
