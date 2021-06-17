import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>0x84A.2100</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="preload" href="/fonts/DIN/DIN-Bold.ttf" as="font" crossOrigin=""/>
      </Head>

      <Image
        src="/images/logo.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <nav>
        <ul>
          <li><a href="/" target="_blank" rel="noopener noreferrer">/</a> <span className="subtitle">home</span></li>
          <li><a href="https://twitter.com/0x84A" target="_blank" rel="noopener noreferrer">@0x84A</a> <span className="subtitle">tweet</span></li>
          <li><a href="https://github.com/0x84A" target="_blank" rel="noopener noreferrer">code</a> <span className="subtitle">github/0x84A</span></li>
          <li><a href="https://app.ens.domains/name/0x84a.eth" target="_blank" rel="noopener noreferrer">0x84A.eth</a>&nbsp;
          <span className="subtitle">ENS&nbsp;
            <span className="ethereum-symbol">♦︎</span>&nbsp;
            <span className="hightligt-subtitle">0x84A</span>B05F09B5ad3a1de6941FBf29BdF77CC7E<span className="hightligt-subtitle">2100</span>
          </span>
          </li>
        </ul>
      </nav>

      <footer>
        &copy; 2021 0x84A.2100
      </footer>
    </div>
  )
}
