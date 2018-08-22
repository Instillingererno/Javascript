import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Layout from './Layout';
import CarouselLayout from './CarouselLayout';
import CarouselWrapper from './CarouselWrapper';
import NewsLayout from './NewsLayout';
import CardWrapper from './CardWrapper';

export default class App extends Component {
  render() {
    return (
        <Layout>
            <CarouselLayout>
                <CarouselWrapper />
            </CarouselLayout>
            <NewsLayout>
                <CardWrapper />
            </NewsLayout>
        </Layout>
    );
  }
}
