import React from 'react'
import Layout from '../components/common/Layout'
import Search from '../components/home/Search'
import Filter from '../components/home/Filter'
import CountryCard from '../components/home/CountryCard'

const Home = () => {
  return (
    <Layout>
        <div>
            <Search />
            <Filter />
        </div>
        <div>
            <CountryCard />
        </div>
    </Layout>
  )
}

export default Home