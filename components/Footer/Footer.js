import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection'
import { Container, BorderBottom } from '../Styled/Home.Styled';

function Footer() {
    return (
        <>
            <Container>
                <BorderBottom margin="20px 0px" />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </Container>
        </>
    )
}

export default Footer
