import Link from "next/link"
import Image from 'next/image'
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"


export default function FirstPost () {

    const myImageComponent = () => {
        <Image
            src="../../public/images/profile.jpg"
            height={144}
            width={144}
            alt="My Profile"
        />
    }

    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload" //controls when the third-party script should load
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
        }
        />
         <h1>First Page</h1>
         <h2>
            <Link href="/">Back to Home</Link>
         </h2>
        </Layout>
       
    )
    
}