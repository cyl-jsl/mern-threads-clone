import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" name="Mark" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              mark
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>This is my first threads</Text>
      <Box
        position={"relative"}
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          1123 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>EMOJI</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post</Text>
        </Flex>
        <Button>Get it</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment={"Looks good"}
        createAt={"2d"}
        likes={100}
        username={"Jin"}
        userAvatar={"https://bit.ly/kent-c-dodds"}
      />
      <Comment
        comment={"pretty nice"}
        createAt={"2d"}
        likes={123}
        username={"Mike"}
        userAvatar={"https://bit.ly/ryan-florence"}
      />
      <Comment
        comment={"Wow it is amazing"}
        createAt={"2d"}
        likes={77}
        username={"Charli"}
        userAvatar={"https://bit.ly/sage-adebayo"}
      />
      <Comment
        comment={"look forward to"}
        createAt={"2d"}
        likes={326}
        username={"Billis"}
        userAvatar={"https://bit.ly/code-beast"}
      />
    </>
  );
};

export default PostPage;
