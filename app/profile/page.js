import HeaderPage from "../components/headerComp";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from 'next/navigation'

export default async function Profile() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login')
    }
    return (
        <>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <div>
            <section>
                <HeaderPage text="Профиль" />
            </section>
        </div>
        </>
    );
}