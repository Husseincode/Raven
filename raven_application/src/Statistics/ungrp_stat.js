import React from 'react'
import RavenHeader from '../Page_Component/RavenHeader'
import RavenFooter from '../Page_Component/RavenFooter'
import { details } from '../Data/details'

const UngrpStat = () => {
    return <>
    <RavenHeader {...details}/>
    <RavenFooter {...details}/>
    </>
}

export default UngrpStat
