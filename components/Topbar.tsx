import React from 'react'
import { View, SectionList } from 'react-native'


const topbar = [
    { name: "Explore", link: "" },
    { name: "Following", link: "" },
    { name: "For you", link: "" },
]
const Topbar = () => {
  return (
    <View style={{gap: 2}}>
        <SectionList sections={topbar} renderItem={(item) => (
            <View style={{flex: 0.2}}>{item.name}</View>
        )}/>
    </View>
  )
}

export default Topbar