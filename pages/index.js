import React from 'react'

function Index() {

  console.log('fetch data')

  if (typeof window === 'undefined')
    console.log('print only at server-side')
  else
    console.log('print only at client-side')

  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  )
}

export default Index