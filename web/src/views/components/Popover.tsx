import { ReactNode } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { cn } from '../../app/utils/cn';

interface PopoverDefaultProps {
  children: ReactNode;
  className?: string;
}

function Root({ children, ...rest }: PopoverDefaultProps & RadixPopover.PopoverProps) {
  return (
    <RadixPopover.Root {...rest}>
      {children}
    </RadixPopover.Root>
  );
}

function Trigger({ children }: { children: ReactNode }) {
  return (
    <RadixPopover.Trigger className='outline-none select-none' asChild>
      {children}
    </RadixPopover.Trigger>
  );
}

function Content({ children, className, ...rest }: PopoverDefaultProps & RadixPopover.PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        sideOffset={16}
        className={cn(
          'p-2 bg-white rounded-2xl space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,.10)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[51]',
          className
        )}
        {...rest}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
}

function Close() {
  return (
    <RadixPopover.Close />
  );
}

export const Popover = {
  Root,
  Trigger,
  Content,
  Close
};
