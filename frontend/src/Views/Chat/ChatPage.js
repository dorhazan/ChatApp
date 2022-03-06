import { Box } from "@chakra-ui/react"
import { ChatState } from "../../Context/ChatProvider"
import SideBar from "../../Components/Chat/SideBar"
import MyChats from "../../Components/Chat/MyChats"
import ChatBox from "../../Components/Chat/ChatBox"
import { useState } from "react"

const ChatPage = () =>{
 const {user} = ChatState()
const[fetchAgain,setFetchAgain] = useState(false)

return(
    <div style={{width:"100%"}}>
        {user && <SideBar/>}
        <Box
        d='flex'
        justifyContent='space-between'
        w='100%'
        color='white'
        h='91.5vh'
        p='10px'
        >
            {user&& <MyChats fetchAgain={fetchAgain} color='white'/>}
            {user&& <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} color='white'/>}
        </Box>
    </div>
)
}

export default ChatPage