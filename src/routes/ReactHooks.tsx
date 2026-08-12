import Header from '@/components/Header'
import SimpleCounter from '@/components/React Hooks/SimpleCounter'
import CharacterCounter from '@/components/React Hooks/CharacterCounter';
import Clock from '@/components/React Hooks/Clock';
import Unmount from '@/components/React Hooks/Unmount';
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/store';
import { createFileRoute } from '@tanstack/react-router'
import { v4 as uuidv4 } from "uuid";
import { useMemo } from 'react';

export const Route = createFileRoute('/ReactHooks')({
  component: RouteComponent,
})

interface Card {
  id: string,
  card: React.ReactNode
}

function RouteComponent() {

  const title = useSelector((state: RootState) => state.title.value)
  const Cards: Card[] = useMemo(() => [
    {
      id: uuidv4(),
      card: <SimpleCounter />
    },
    {
      id: uuidv4(),
      card: <CharacterCounter />
    },
    {
      id: uuidv4(),
      card: <Clock />
    },
    {
      id: uuidv4(),
      card: <Unmount />
    }
  ], [])

  return <div className='my-0 mx-auto grid grid-rows-[auto_1fr] h-screen w-screen text-center bg-secondary text-text'>
    <Header title={title} />
    <div className='p-2 h-fit w-full flex justify-center gap-x-2'>
      {Cards.map((item) => <li key={item.id} className='list-none'>{item.card}</li>)}
    </div>
  </div >
}