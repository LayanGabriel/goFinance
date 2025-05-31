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
    Text,
    Transactions,
} from "./styles";
import { HighlightCard } from '../../components/HighlightCard';
import { Transaction } from "../../components/Transaction";

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                    <Photo source ={{uri:'https://img.freepik.com/fotos-gratis/cabeca-de-vaca-preta-e-branca-no-ceu-azul_268835-1008.jpg?semt=ais_hybrid&w=740'}}/>
                    <User>
                        <UserGreeting>Olá</UserGreeting>
                        <UserName>Tia</UserName>
                    </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
            
            <HighlightCards>
                <HighlightCard 
                    type = "up"
                    title = "Entradas"
                    amount = "R$ 17.000,00"
                    lastTransaction = "Última entrada em 16 de junho."
                />
                <HighlightCard 
                    type = "down"
                    title = "Saída"
                    amount = "R$ 12.000,00"
                    lastTransaction = "Última saída em 10 de junho."
                />
                <HighlightCard 
                    type = "total"
                    title = "Total"
                    amount = "R$ 7.000,00"
                    lastTransaction = "De 1 a 16 de Junho"
                />
            </HighlightCards>

            <Transactions>

                <Text>Listagem</Text>

                <Transaction
                    type = "down"
                    title = "Saída"
                    amount = "R$ 12.000,00"
                    lastTransaction = "Última saída em 10 de junho."/>
                <Transaction
                    type = "down"
                    title = "Saída"
                    amount = "R$ 12.000,00"
                    lastTransaction = "Última saída em 10 de junho."/>      

                <Transaction
                    type = "down"
                    title = "Saída"
                    amount = "R$ 12.000,00"
                    lastTransaction = "Última saída em 10 de junho."/>    
                         
            </Transactions>

        </Container>
    );

}