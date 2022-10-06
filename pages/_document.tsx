import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'> 
            <Head>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" 
                    rel="stylesheet"
                />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" 
                    rel="stylesheet" 
                />
            </Head>
            <body className='font-poppins'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}   