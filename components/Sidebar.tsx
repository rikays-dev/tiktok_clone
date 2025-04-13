import React from 'react'
import { Button, SectionList, View, Image, Text } from 'react-native'


const homeside = [
    { name: "likes", icon: "#", amount: 1 },
    { name: "comments", icon: "#", amount: 1 },
    { name: "forward", icon: "#", amount: 1 },
]


const Sidebar = () => {

    const handleClick = () => {
        console.log("Button clicked")
    }
  return (
    <View>
        <SectionList sections={homeside} renderItem={(item) => (
            <Button title={item.name} onPress={handleClick}>
                <Image source={item.icon}/>
                <Text>{item.name}</Text>
            </Button>
        )}/>
    </View>
  )
}

export default Sidebar