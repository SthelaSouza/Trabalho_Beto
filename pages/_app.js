import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </DataProvider>   
  ) 
}

export default MyApp