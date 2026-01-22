import { userService } from "@/services/user.service";

import { Button } from "@/components/ui/button";

export default async function Home() {
  const { data } = await userService.getSession();

  console.log(data);
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
