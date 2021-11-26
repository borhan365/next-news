import { NewsTitle, SubTitle, A, ATag} from '../../Styled/Global.Styled'

function LeadNewsContent() {
  return (
    <div>
        <NewsTitle size="30px" height="40px">
          <A href="/single" passHref>
            <ATag>কৃষক বিক্ষোভে গাড়ি উঠিয়ে হত্যায় ভারতের রাজনীতিতে উত্তাপ</ATag>
          </A>
        </NewsTitle>
        <SubTitle>ভারতের কেন্দ্রীয় স্বরাষ্ট্র প্রতিমন্ত্রী অজয় কুমার মিশ্রর বাড়ি উত্তর প্রদেশের লাখিমপুর খেরিতে। গত রোববার সেখানে প্রতিমন্ত্রীর একটি অনুষ্ঠানে</SubTitle>
        <SubTitle margin="5px 0px">১ ঘণ্টা আগে</SubTitle>
    </div>
  )
}

export default LeadNewsContent
