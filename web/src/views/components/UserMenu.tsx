
import { useAuth } from "../../app/hooks/useAuth"
import { ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import { DropdownMenu } from "./DropdownMenu";
import * as Avatar from '@radix-ui/react-avatar';

export function UserMenu() {
  const { data, handleSignOut } = useAuth()

  if(!data) return;

  const fullName = data.name.split(' ')
  const firstName = fullName[0]
  const lastName = fullName[fullName.length - 1]

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar.Root className="w-12 h-12 flex items-center justify-center bg-teal-0 rounded-full">
          <Avatar.Fallback className="text-teal-900 font-medium text-sm tracking-[-0.5px]">
            {firstName[0]}{lastName[0]}
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="left" align="start">
        <DropdownMenu.Item onSelect={() => console.log('Abriu perfil')}>
          <span>Perfil</span>
          <PersonIcon className='text-gray-800 w-5 h-5 ml-auto' />
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={handleSignOut}>
          <span>Sair</span>
          <ExitIcon className='text-gray-800 w-5 h-5 ml-auto' />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
