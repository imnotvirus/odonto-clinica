import RegisterDoctor from "@/components/Form/RegisterDoctor";
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
    <main className="flex min-h-screen p-24">
      <div className="absolute bottom-4 left-4 ">
        <SignOutButton />
      </div>
      <RegisterDoctor />
    </main>
  );
}

Home.requireAuth = true;
