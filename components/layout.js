import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Blog · David Hewitt' }) => (
    <div>
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <title>{ title }</title>
        </Head>
        
        <header>
            <nav>
                <Link href='/'><a>Home</a></Link>
            </nav>
        </header>

        <main>
            { children }
        </main>

        <footer>

        </footer>
  </div>
)