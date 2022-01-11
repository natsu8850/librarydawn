
import './_app.css'

import { AuthContextProvider } from '../Context/authContext/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    // <AuthContextProvider>
    <Component {...pageProps} />
    // </AuthContextProvider>
  )
}

export default MyApp
