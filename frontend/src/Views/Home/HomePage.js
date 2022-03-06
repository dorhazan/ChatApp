import {React,useEffect} from "react";
import {Container,Box,Text,Tabs,TabList,TabPanel,TabPanels,Tab} from '@chakra-ui/react'
import './HomePage.css'
import Login from "../../Components/Authentication/Login";
import Register from "../../Components/Authentication/Register";
import { useHistory } from 'react-router-dom'


const HomePage = () =>{
    const history = useHistory()

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('userInfo'))
     
         if(user){
             history.push('/chats')
         }
        },[history])
return(
    <Container maxW='xl' centerContent>
        <Box className="TitleBox">
            <Text className="TitleText">Talk-Back</Text>
        </Box>
        <Box className="LoginBox">
        <Tabs variant='soft-rounded' >
     <TabList>
       <Tab width='50%'>Login</Tab>
       <Tab  width='50%'>Register</Tab>
     </TabList>
     <TabPanels>
    <TabPanel>
        <Login/>
    </TabPanel>
    <TabPanel>
        <Register/>
    </TabPanel>
     </TabPanels>
   </Tabs>
        </Box>
    </Container>
)
}

export default HomePage