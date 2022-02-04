import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

const ContainerBlock = ({ children, ...customMeta }) => {
  const router = useRouter();

  const meta = {
    title: "Victim's Hope - Une Organisation de Droit Congolais",
    description: "Victim's Hope est une association ayant pour but de ...",
    favicon: "/static/favicon.ico",
    ...customMeta

  };

  return (
    <div>
      <Head>
        <title>
          {meta.title}
        </title>
        <link rel="shortcut icon" href={meta.favicon} />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://victimshopedrc.org${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://victimshopedrc.org${router.asPath}`}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="relative antialiased bg-white dark:bg-[#25292A] z-0 overflow-hidden">
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default ContainerBlock
