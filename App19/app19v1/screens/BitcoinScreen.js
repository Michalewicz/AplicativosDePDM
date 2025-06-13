import React from 'react';
import ConverterScreen from '../components/ConverterScreen';

export default function BitcoinScreen() {
  return <ConverterScreen conversionRate={350000} currencySymbol="₿" />;
}
