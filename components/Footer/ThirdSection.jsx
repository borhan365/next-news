import { Div, Flex, SubTitle } from '../../components/Styled/Home.Styled';

function ThidSection() {
    return (
        <>
        <Flex bt="1px solid lightgray" padding="6px 0px" Mgg="5px">
          <Div>
            <SubTitle size="18px" Msize="16px" color="gray" Mta="center">
              স্বত্ব © ২০২১ | প্রথম আলো সম্পাদক ও প্রকাশক: মতিউর রহমান
            </SubTitle>
          </Div>
    
          {/* Right side */}
          <Div>
            <SubTitle size="18px" Msize="16px" color="gray" Mta="center">
              ওয়েবসাইট ডিজাইন এবং ডেভেলপ করেছেন: মোঃ বোরহান উদ্দিন
            </SubTitle>
          </Div>
        </Flex>
      </>
    )
}

export default ThidSection;
