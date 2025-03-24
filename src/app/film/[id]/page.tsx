import { Film } from "@/components/screens/Film/Film";

export default async function Page() {
    return (
        <div className="flex justify-center">
            <Film />
        </div>
    )
}


/*
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <div>Фильмец: {id}</div>
}
 */