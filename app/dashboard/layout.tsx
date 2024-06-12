import { useRouter } from "next/router"

export default function DashBoardLayout({
    children,
    }:{
        children:React.ReactNode
    }

)
{
    const router=useRouter()
    return <section>
        <nav></nav>
        {children}
    </section>
}