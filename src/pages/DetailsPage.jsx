import React from 'react'
import { useParams } from "react-router-dom";
import Layout from '../components/common/Layout'
import BackButton from '../components/detail/BackButton'
import CountryDetail from '../components/detail/CountryDetail'

const DetailsPage = () => {
  const { id:alpha3Code } = useParams();
  

  return (
    <Layout>
        <div>
            <BackButton />
        </div>
        <div>
            <CountryDetail alpha3Code={alpha3Code} />
        </div>
    </Layout>
  )
}

export default DetailsPage