import {
  A,
  ATag,
  Div,
  FacebookIcon,
  Flex,
  InstagramIcon,
  NewsTitle,
  SocialIcon,
  SubTitle,
  TwitterIcon,
  YoutubeIcon,
} from "../Styled/Home.Styled";

function ExcerptArea() {
  return (
    <>
      <Div>
        {/* category */}
        <NewsTitle bb="2px solid #0f9fff" width="max-content">
          <A href="/category" passHref>
            <ATag color="#0f9fff">বাংলাদেশ</ATag>
          </A>
        </NewsTitle>

        {/* title */}
        <NewsTitle size="45px" Msize="30px">হতে পারে মাঝারি থেকে ভারী বৃষ্টি</NewsTitle>

        <Flex mb="20px">
          <Div>
            <SubTitle size="18px">নিজস্ব প্রতিবেদক ঢাকা</SubTitle>
            <SubTitle size="18px">প্রকাশ: ০২ জুলাই ২০২১, ১১: ৩৫</SubTitle>
          </Div>

          <Flex ai="center" Mai="flex-start" Mfd="row" Mgg="0px">
            <Div>
              <SubTitle size="18px">শেয়ার করুন: </SubTitle>
            </Div>
            <Flex gg="0px" Mjc="flex-start" Mfd="row">
              <A href="/">
                <ATag>
                  <SocialIcon>
                    <FacebookIcon />
                  </SocialIcon>
                </ATag>
              </A>
              <A href="/">
                <ATag>
                  <SocialIcon>
                    <TwitterIcon />
                  </SocialIcon>
                </ATag>
              </A>
              <A href="/">
                <ATag>
                  <SocialIcon>
                    <InstagramIcon />
                  </SocialIcon>
                </ATag>
              </A>
              <A href="/">
                <ATag>
                  <SocialIcon>
                    <YoutubeIcon />
                  </SocialIcon>
                </ATag>
              </A>
            </Flex>
          </Flex>
        </Flex>
      </Div>
    </>
  );
}

export default ExcerptArea;
