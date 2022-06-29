import { SessionProvider } from "next-auth/react"
import "../styles/global.css";

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  // OAuth 인증후에 인증정보를 session에 적용하기 위해, Provider로 감싸주기
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}