import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FakeAPI')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/FakeAPI"!</div>
}
    