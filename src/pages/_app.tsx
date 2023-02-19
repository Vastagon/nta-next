import type { AppProps } from 'next/app'

import "../styles/App.css"
import "../styles/Reviews.css"
import "../styles/Schedule.css"
import "../styles/Programs.css"
import "../styles/ContactUs.css"
import "../styles/AfterSchool.css"
import "../styles/Tablet.css"
import "../styles/Mobile.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
