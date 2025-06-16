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


import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { HighlightCard } from '../../components/HighlightCard';
import { Transaction } from "../../components/Transaction";

import { getTransactions } from '../../api/api';

interface MonthlySummary {
    entry: number;
    exit: number;
    total: number;
    lastEntry: string;
    lastExit: string;
}

type TransactionTypeWithExtras = {
  title: string;
  amount: string;
  category: string;
  date: string;
  type: "up" | "down";
  icon: string;
};

export function Dashboard() {
    const [data, setData] = useState<TransactionTypeWithExtras[]>([]);

    const [highlightData, setHighlightData] = useState<MonthlySummary>({
        entry: 0,
        exit: 0,
        total: 0,
        lastEntry: '',
        lastExit: ''
    });

    // Pega o ícone pelo nome da categoria
    const getIconByCategoria = (categoria: string) => {
        const icons: { [key: string]: string } = {
            'Água': 'droplet',
            'Aluguel': 'home',
            'Alimentação': 'coffee',
            'Assinaturas': 'edit-2',
            'Cartão de Crédito': 'credit-card',
            'Compras Online': 'shopping-bag',
            'Cuidados Pessoais': 'user',
            'Cursos': 'book-open',
            'Doações': 'gift',
            'Educação': 'book',
            'Emergências': 'alert-triangle',
            'Energia': 'zap',
            'Farmácia': 'plus-circle',
            'Freelance': 'briefcase',
            'Impostos': 'file-text',
            'Investimentos': 'bar-chart',
            'Internet': 'wifi',
            'Lazer': 'monitor',
            'Manutenção': 'tool',
            'Outros': 'more-horizontal',
            'Pet': 'heart',
            'Presentes': 'gift',
            'Poupança': 'save',
            'Reserva de Emergência': 'shield',
            'Reembolsos': 'rotate-ccw',
            'Rendimentos': 'trending-up',
            'Restaurante': 'coffee',
            'Roupas': 'shopping-bag',
            'Salário': 'dollar-sign',
            'Saúde': 'heart',
            'Serviços Domésticos': 'home',
            'Supermercado': 'shopping-cart',
            'Telefone': 'phone',
            'Transporte': 'truck',
            'Viagem': 'map-pin',
        };
        return icons[categoria] || 'dollar-sign';
    };

    // Formata datas para exibir nos cards
    function getMonthName(date: Date): string {
        return date
            .toLocaleString('pt-BR', { month: 'long' })
            .replace(/^./, c => c.toUpperCase());
    }
    function formatCustomDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = getMonthName(date);
        return `${day} de ${month}`;
    }

    // Busca transações 
    const fetchData = useCallback(async () => {
        try {
            const response = await getTransactions();

            const formatted: TransactionTypeWithExtras[] = response.map(item => ({
                title: item.titulo,
                amount: parseFloat(item.preco).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                category: item.categoria,
                date: new Date(item.data).toLocaleDateString('pt-BR'),
                type: item.tipo === 'entrada' ? 'up' : 'down',
                icon: getIconByCategoria(item.categoria)
            }));

            setData(formatted);
        } catch (err: any) {
            console.error('Erro ao carregar transações:', err.message);
        }
    }, []);

    // Busca resumo mensal 
    const fetchMonthlySummary = useCallback(async () => {
  try {
    const transacoes = await getTransactions();

    let entrada = 0;
    let saida = 0;
    let ultimaEntradaData: Date | null = null;
    let ultimaSaidaData: Date | null = null;

    transacoes.forEach((tx: any) => {
      const valor = Number(tx.preco);
      const dataTx = new Date(tx.data);

      if (tx.tipo === 'entrada') {
        entrada += valor;

        if (!ultimaEntradaData || dataTx > ultimaEntradaData) {
          ultimaEntradaData = dataTx;
        }
      } else if (tx.tipo === 'saida') {
        saida += valor;

        if (!ultimaSaidaData || dataTx > ultimaSaidaData) {
          ultimaSaidaData = dataTx;
        }
      }
    });

    const total = entrada - saida;

    setHighlightData({
      entry: entrada,
      exit: saida,
      total,
      lastEntry: ultimaEntradaData ? formatCustomDate(ultimaEntradaData.toISOString()) : '',
      lastExit: ultimaSaidaData ? formatCustomDate(ultimaSaidaData.toISOString()) : '',
    });

  } catch (error: any) {
    console.error('Erro ao buscar resumo mensal:', error);
  }
}, []);

    // Na montagem inicial
    useFocusEffect(
    useCallback(() => {
        fetchData();
        fetchMonthlySummary();
    }, [fetchData, fetchMonthlySummary])
    );

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
                    amount={highlightData.entry.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                    lastTransaction={highlightData.lastEntry ? `Última entrada em ${highlightData.lastEntry}` : 'Nenhuma entrada'}
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount={highlightData.exit.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                    lastTransaction={highlightData.lastExit ? `Última saída em ${highlightData.lastExit}` : 'Nenhuma saída'}
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount={highlightData.total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                    lastTransaction="Resumo geral"
                />
            </HighlightCards>

            <ListContainer>
                <ListTitle>Listagem de Transações</ListTitle>
                <Transactions>
                    {data.map((item, index) => (
                        <Transaction
                            key={`${item.title}-${index}`}
                            title={item.title}
                            amount={item.amount}
                            category={item.category}
                            date={item.date}
                            type={item.type}
                            icon={item.icon}
                        />
                    ))}
                </Transactions>
            </ListContainer>
        </Container>
    );
}
