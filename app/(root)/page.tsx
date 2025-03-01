import React from 'react'
import { HeaderBox, TotalBalanceBox } from '@/components'

const Home = () => {
    const loggedIn = { firstName: 'Jenny'};
  return (
    <section className='home'>
        <div className="home-content">
            <header className='home-header'>
                <HeaderBox
                    type= 'greeting'
                    title= 'Welcome'
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext= "Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                    accounts= {[]}
                    totalBanks= {1}
                    totalCurrentBalance= {1249.33}
                />
            </header>
        </div>
    </section>
  )
}

export default Home