import { createFileRoute } from '@tanstack/react-router'
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {

  return (
    <div className="my-0 mx-auto text-center grid grid-rows-[auto_1fr] h-screen bg-(--bg) text-(--text)">
      <Header title="code-playground" />
      <ContentWrapper />
    </div >
  )
}