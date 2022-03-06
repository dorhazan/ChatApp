import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";
// import { ChatState } from "../../Context/ChatProvider";

const UserBadgeItem = (props) => {
    // const { user } = ChatState();

  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={props.handleFunc}
    >
      {props.user.name}
      {props.admin === props.user._id && <span> (Admin)</span>}
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;