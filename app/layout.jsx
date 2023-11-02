import Provider from '@components/Provider';

export const metadata = {
    title: 'Nextjs-13',
    description: 'Discover inside you'
}


const RootLayout = ({ children }) => {

    return (
        <html lang='en' >
            <body>
                <Provider>
                    <main className='app' >
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;