import React from 'react'
import Layout from '../components/common/Layout'
import BackButton from '../components/detail/BackButton'
import CountryCard from '../components/detail/CountryCard'

const DetailsPage = () => {
  return (
    <Layout>
        <div>
            <BackButton />
        </div>
        <div>
            <CountryCard />
        </div>
    </Layout>
  )
}

export default DetailsPage