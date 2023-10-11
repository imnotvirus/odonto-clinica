import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NotFound () {
    const session = await getServerSession();
    const user = session?.user;
    if (!user) {
        return redirect("/signin");
    }
     return redirect("/");

}