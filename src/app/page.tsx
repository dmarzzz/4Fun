"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    // const func = async () => {
    //   const slot = await fetch(
    //     "https://black-nameless-friday.discover.quiknode.pro/c710c8b6fcd31fb810335900407bafaaf2bcb980/eth/v1/beacon/headers"
    //   )
    //     .then((res) => res.json())
    //     .then(({ data }) => data[0].header.message.slot)
    //     .catch((error) => {
    //       console.error("Error:", error)
    //     })
    //   if (slot) {
    //     router.push(`/slot/${slot}`)
    //   }
    // }
    // func()
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      dmarz

      {/* <h1>Apples</h1> */}
      <pre>
marzec/
├── about/
│   ├── work.html
│   ├── play.html
├── writings/
│   ├── mev.html
</pre>
    </main>
  )
}
