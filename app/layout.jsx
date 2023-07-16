import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: "Promotopea",
    description: 'Discovering Next Js'
}

const RootLayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
            {children}
        </main>
    </body>
   </html>
  )
}

export default RootLayout