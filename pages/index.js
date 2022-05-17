import { StateContext } from "../context/StateContext"

export default function Home() {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  )
}
