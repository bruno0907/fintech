import { useAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components/Button";

export function Home() {
  const { handleSignOut } = useAuth()

  return (
    <>
      <h1>Home Page</h1>
      <Button onClick={handleSignOut}>Sair</Button>
    </>
  )
}
