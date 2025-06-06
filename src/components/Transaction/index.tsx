import {
    Container,
    Header,
    Title,
    Footer,
    Amount,
    LastTransaction,
} from "./styles";

interface Props{
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTransaction: string;
};

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

export function Transaction({ type, title, amount, lastTransaction } : Props){
    return(
        <Container type = { type }>
            <Header>
                <Title type = { type }>
                    {title}
                </Title>
            </Header>

            <Footer >

                <Amount type = { type }> 
                    { amount } 
                </Amount>

                <LastTransaction type = { type }>
                    { lastTransaction }
                </LastTransaction>

            </Footer>

        </Container>
    )
}