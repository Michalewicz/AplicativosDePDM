import React from 'react';
import ConverterScreen from '../components/ConverterScreen';

export default function EuroScreen() {
  return <ConverterScreen conversionRate={5.60} currencySymbol="€" />;
}
