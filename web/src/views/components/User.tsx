import { useAuth } from "../../app/hooks/useAuth"

export function UserMenu() {
  const { data } = useAuth()

  if(!data) return;

  const fullName = data.name.split(' ')
  const firstName = fullName[0]
  const lastName = fullName[fullName.length - 1]

  return (
    <div className="p-3 bg-teal-0 rounded-full">
      <span className="text-teal-900 font-medium text-sm tracking-[-0.5px]">
        {firstName[0]}{lastName[0]}
      </span>
    </div>
  )
}
