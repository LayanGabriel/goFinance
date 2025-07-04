<<<<<<< HEAD
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Form, Fields, TransactionsTypes } from './styles';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { postTransaction } from '../../api/api';

export function Register() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState<'income' | 'outcome' | null>(null);

  function handleSelectTransactionType(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  async function handleRegister() {
    if (!title || !price || !category || !transactionType) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const novaTransacao = {
      titulo: title,
      preco: parseFloat(price),
      categoria: category,
      tipo: transactionType === 'income' ? 'entrada' : 'saida',
      data: new Date().toISOString(),
    };

    try {
      await postTransaction(novaTransacao);
      Alert.alert('Transação cadastrada com sucesso!');

      // Resetar os campos
      setTitle('');
      setPrice('');
      setCategory('');
      setTransactionType(null);
    } catch (error) {
      Alert.alert('Erro ao cadastrar transação.');
    }
  }

  return (
    <Container>
      <Header>
        <Title>Cadastrar Transação</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
          />
          <Input 
            placeholder="Preço"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <TransactionsTypes>
            <TransactionTypeButton
              type="income"
              title="Entrada"
              isActive={transactionType === 'income'}
              onPress={() => handleSelectTransactionType('income')}
            />

            <TransactionTypeButton
              type="outcome"
              title="Saída"
              isActive={transactionType === 'outcome'}
              onPress={() => handleSelectTransactionType('outcome')}
            />
          </TransactionsTypes>

          <Input 
            placeholder="Categoria"
            value={category}
            onChangeText={setCategory}
          />
        </Fields>

        <Button title="Cadastrar" onPress={handleRegister} />
      </Form>
    </Container>
  );
}
=======
import React from "react";
import {  Container,
    Form,
    Title,
    Header 
} 
from "./styles";

import { Input } from "../../components/Forms/Input";


export function Register(){
    return(
        < Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Input
                    placeholder = "Nome"
                />
                <Input
                    placeholder = "Valor"
                />
            </Form>
        </Container>     
    )
}
>>>>>>> de2389da16985d982dcda18469ae88c41674069e
