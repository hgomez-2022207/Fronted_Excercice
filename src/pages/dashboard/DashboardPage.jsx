import { useEffect } from "react"
import { Navbar } from "../../components/navbars/Navbar"
import { useChannels, useUserDetails } from "../../shared/hooks"
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Content } from "../../components/dashboard/Content"
import { Sidebar } from "../../components/navbars/Sidebar"

import './dashboardPage.css'

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching, followedChannels} = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  }, [])

  if(isFetching){
    <LoadingSpinner/>
  }

  return (
    <div className="dasboard-container">
      <Navbar/>
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
    //
  )
}
