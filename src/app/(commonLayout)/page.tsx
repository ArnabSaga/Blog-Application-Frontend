import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  // TODO: cookies can't get in home
  const session = await authClient.getSession();
  console.log(session);

  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
