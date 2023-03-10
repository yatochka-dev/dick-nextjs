import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dick</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>

                <div>
                    <svg width="300" height="500" viewBox="0 0 300 500" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="Dick" clip-path="url(#clip0_2_13)">
                            <g id="eggs">
                                <ellipse id="left-egg" cx="75" cy="420.719" rx="75" ry="79.2812"
                                         fill="#D9D9D9"/>
                                <ellipse id="right-egg" cx="225" cy="420.719" rx="75" ry="79.2812"
                                         fill="#D9D9D9"/>
                            </g>
                            <rect id="body" x="75" y="79.2812" width="150" height="341.438"
                                  fill="#D9D9D9"/>
                            <g id="head">
                                <ellipse id="line" cx="150" cy="79.2812" rx="75" ry="79.2812"
                                         fill="#D9D9D9"/>
                                <rect id="main" x="136" y="30.6554" width="30" height="48.6258"
                                      fill="#B52626"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_2_13">
                                <rect width="300" height="500" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
