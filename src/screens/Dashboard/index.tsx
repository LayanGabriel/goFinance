import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon, 
    HighlightCards,
    Transactions,
    ListContainer,
    ListTitle,
} from "./styles";

import { HighlightCard } from '../../components/HighlightCard';
import { Transaction } from "../../components/Transaction";

type TransactionType = {
  title: string;
  amount: string;
  category: string;
  date: string;
  type: "up" | "down";
};

export function Dashboard() {
    const transactions: TransactionType[] = [
        {
            title: "Desenvolvimento de site",
            amount: "R$ 600,00",
            category: "Serviço",
            date: "28/06/2025",
            type: "up",
        },
        {
            title: "Compra de material",
            amount: "R$ 150,00",
            category: "Educação",
            date: "29/06/2025",
            type: "up",
        },
        {
            title: "Academia",
            amount: "R$ 80,00",
            category: "Saúde",
            date: "30/06/2025",
            type: "down",
        },
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://img.freepik.com/fotos-gratis/cabeca-de-vaca-preta-e-branca-no-ceu-azul_268835-1008.jpg?semt=ais_hybrid&w=740' }} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Tia</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.000,00"
                    lastTransaction="Última entrada em 16 de junho."
                />
                <HighlightCard
                    type="down"
                    title="Saída"
                    amount="R$ 12.000,00"
                    lastTransaction="Última saída em 10 de junho."
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 7.000,00"
                    lastTransaction="De 1 a 16 de Junho"
                />
            </HighlightCards>

            <ListContainer>
                <ListTitle>Listagem de Transações</ListTitle>
                <Transactions>
                    {transactions.map((item, index) => (
                        <Transaction
                            key={`${item.title}-${index}`}
                            title={item.title}
                            amount={item.amount}
                            category={item.category}
                            date={item.date}
                            type={item.type}
                            icon={""}   // <-- Ajuste depois se quiser
                        />
                    ))}
                </Transactions>
            </ListContainer>

        </Container>
    );
}