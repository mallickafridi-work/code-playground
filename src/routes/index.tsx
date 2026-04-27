import { createFileRoute } from '@tanstack/react-router'
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <Header title="code-playground" />
      <ContentWrapper />
    </div >
  )
}