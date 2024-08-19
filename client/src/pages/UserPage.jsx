import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about that1"
      />
      <UserPost
        likes={123}
        replies={0}
        postImg={null}
        postTitle="Hello 脆!"
      />
      <UserPost
        likes={591}
        replies={7}
        postImg="/post2.png"
        postTitle="Amazing talk"
      />
      <UserPost
        likes={332}
        replies={1}
        postImg="/post3.png"
        postTitle="第一篇串文"
      />
    </>
  );
};

export default UserPage;
