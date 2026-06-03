import React, { useState } from 'react'
import Content from '@/components/ContextAPI/Content'
import Navbar from '@/components/ContextAPI/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ContextAPI')({
  component: RouteComponent,
})


function RouteComponent() {

  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}
