import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,


} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails');
    }


    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton
                    onPress={handleBack}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel {'\n'}
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>


            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
            </Footer>


        </Container>
    );
}