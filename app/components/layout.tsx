export default function ComponentsLayout({
    children,
}:{
    children:React.ReactNode
})
{
    return <section>
        <nav></nav>
        {children}
    </section>
}