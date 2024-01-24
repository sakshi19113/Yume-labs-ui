import Pagination from '@components/Pagination'
import CustomerContainer from '@components/ourServicesPage/CustomerContainer'
import EngagementModels from '@components/ourServicesPage/EngagementModels'
import OurServicesHead from '@components/ourServicesPage/OurServicesHead'
import ResearchSection from '@components/ourServicesPage/ResearchSection'
import SelectedProjects from '@components/ourServicesPage/SelectedProjects'
import React from 'react'
import styles from './styles.module.scss'

function OurServicesPage() {
  return (
    <>
      <OurServicesHead/>
      <ResearchSection/>  
      <hr className={styles.hideOnMobile}/>
      <ResearchSection/>  
      <hr className={styles.hideOnMobile}/>
      <ResearchSection/>
      <EngagementModels/>
      <CustomerContainer/>
      <Pagination/>
      <SelectedProjects/>
      <Pagination/>  
    </>
  )
}

export default OurServicesPage