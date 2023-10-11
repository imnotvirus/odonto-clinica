import SignOutButton from "@/components/signout/button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) {
    return redirect("/signin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center dark:text-white">
        {JSON.stringify(session?.user, null, 2)}
      </div>
      <div className="flex flex-col items-center justify-center">
        <SignOutButton />
      </div>
    </main>
  );
}

Home.requireAuth = true;
