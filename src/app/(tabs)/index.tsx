import { View, FlatList } from 'react-native';
import ProductListItem from '@components/ProductListItem';
import products from '@assets/data/products';

// We're using a FlatList in this function. A FlatList enables infinite scroll vertically
// or horizontally. FlatLists hve two required properties: the data (a list) and renderItem.
// renderItem should be a function that tells FlatList how should one single item from the
// array we provided to the data property be rendered.
export default function MenuScreen() {
  return (
    <View>
      <FlatList data={products} renderItem={() => <ProductListItem product={products[0]} />} />
    </View>
  );
};
