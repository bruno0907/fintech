import { Transition } from '@headlessui/react';
import { Logo } from './Logo';
import { Spinner } from './Spinner';

interface SplashScreenProps {
  isLoading: boolean;
}

export function SplashScreen({ isLoading }: SplashScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center fixed top-0 left-0 bg-teal-900">
        <Logo className="h-10 text-white" />
        <Spinner className="h-6 text-teal-900 fill-white" />
      </div>
    </Transition>
  );
}
