import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'

export const Route = createFileRoute('/Anilist')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <>
      <title>People</title>
      <div className="my-0 mx-auto grid grid-rows-[auto_auto_1fr] h-screen w-screen text-center bg-secondary text-text">
        <Header title="Ani-list" />
      </div>
    </>
  )
}
