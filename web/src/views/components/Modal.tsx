import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../app/utils/cn';
import { Cross2Icon } from '@radix-ui/react-icons';

interface Props {
  open: boolean;
  children: ReactNode;
  title: string;
  rightAction?: ReactNode;
  onClose?: () => void;
}

export function Modal({ open, title, rightAction, onClose, children }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'bg-black/80 backdrop-blur-sm  fixed inset-0 z-50',
            'data-[state=open]:animate-overlay-show'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] p-6 space-y-10 bg-white rounded-2xl shadow-[0px_11px_20px_0px_rgba(0,0,0,.10)] w-full max-w-md outline-none',
            'data-[state=open]:animate-content-show',
          )}
        >
          <header className="h-12 flex items-center justify-between text-gray-800">
            <button
              className="w-12 h-12 flex items-center justify-center outline-none"
              onClick={onClose}
            >
              <Cross2Icon className="h-6 w-6" />
            </button>

            <span className="text-lg tracking-[-1px] font-bold">{title}</span>

            <div className="w-12 h-12 flex items-center justify-center outline-none">
              {rightAction}
            </div>
          </header>
          <div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
