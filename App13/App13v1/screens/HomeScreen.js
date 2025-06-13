import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const product = [
  { id: 1, titulo: 'Celular Samsung', imagem: 'https://www.havan.com.br/media/catalog/product/c/e/celular-samsung-galaxy-s24-5g-exynos-2400-8gb-256gb_914354.jpg', descricao: 'Celular com 128GB, ótimo estado.' },
  { id: 2, titulo: 'Notebook Dell', imagem: 'https://imgs.pontofrio.com.br/55065263/1g.jpg?imwidth=1000', descricao: 'Notebook i7, 16GB RAM, SSD 512GB.' },
  { id: 3, titulo: 'Fone Bluetooth', imagem: 'https://edifier.com.br/pub/media/catalog/product/f/o/fone_tws_earbuds_preto.jpg', descricao: 'Fone sem fio, bateria de longa duração.' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        {product.map(product => (
          <ProductCard
           key={product.id}
           product={product}
           onPress={() => navigation.navigate('Details', { product })}
          />

        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
  scroll: { paddingHorizontal: 10 },
});
