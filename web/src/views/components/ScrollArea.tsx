import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
}

export function ScrollArea({ children, className }: ScrollAreaProps) {
  return (
    <RadixScrollArea.Root className={cn('flex-1 py-2 lg:overflow-hidden', className)}>
      <RadixScrollArea.Viewport className="w-full h-full">
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className="flex select-none touch-none bg-gray-900/5 p-0.5 my-2 rounded-md transition-colors duration-[160ms] ease-out hover:bg-gray-900/10 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className="flex-1 bg-gray-600 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="flex select-none touch-none bg-gray-900/5 p-0.5 my-2 rounded-md transition-colors duration-[160ms] ease-out hover:bg-gray-900/10 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <RadixScrollArea.Thumb className="flex-1 bg-gray-600 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className="bg-gray-900" />
    </RadixScrollArea.Root>
  );
}
