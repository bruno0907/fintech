import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface DropdownMenuDefaultProps {
  children: ReactNode;
  className?: string;
}

interface TriggerProps {
  children: ReactNode
}

function Root({ children, ...rest }: DropdownMenuDefaultProps & RadixDropdownMenu.DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root {...rest}>
      {children}
    </RadixDropdownMenu.Root>
  );
}

function Trigger({ children, ...rest }: TriggerProps & RadixDropdownMenu.DropdownMenuTriggerProps) {
  return (
    <RadixDropdownMenu.Trigger className='outline-none select-none' asChild {...rest}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

function Content({ children, className, ...rest }: DropdownMenuDefaultProps & RadixDropdownMenu.DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        sideOffset={16}
        className={cn(
          'p-2 bg-white rounded-2xl space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,.10)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[51]',
          className
        )}
        {...rest}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
}

function Item({ children, className, ...rest }: DropdownMenuDefaultProps & RadixDropdownMenu.DropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item className={cn(
      'outline-none p-2 min-w-[163px] min-h-[48px] flex gap-2 items-center text-gray-800 text-sm data-[highlighted]:bg-gray-50 rounded-xl transition-colors cursor-pointer',
      className
    )}
    {...rest}
    >
      {children}
    </RadixDropdownMenu.Item>
  );
}

function Separator () {
  return <RadixDropdownMenu.Separator className="h-[1px] m-2 bg-gray-200" />;
}

export const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
  Separator
};
