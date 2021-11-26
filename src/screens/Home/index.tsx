import React from 'react';

import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent } from './styles';
import { RFValue} from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import Car from '../../components/Car';

export function Home() {
    const carData = {
        brand: 'Audi',
        name: 'R$ 5 Coupé',
        rent: {
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 Carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            <Car data={carData}/>
        </Container>
    )
}