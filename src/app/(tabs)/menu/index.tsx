import { View, FlatList } from 'react-native';
import ProductListItem from '@components/ProductListItem';
import products from '@assets/data/products';

// We're using a FlatList in this function. A FlatList enables infinite scroll vertically
// or horizontally. FlatLists have two required properties: the data (a list) and renderItem.
// renderItem should be a function that tells FlatList how should one single item from the
// array we provided to the data property be rendered. "item" is necessary inside the function
// in order form rednerItem to iterate through the list of products and display each one. numColumns
// is optional here. contentContainerStyle gap: 10 is just another way to specify the size of row 
// spacing. columnWrapperStyle gap: 10 specifies column spacing. padding: 10 spcifies padding around
// the entire FlatList.
export default function MenuScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};
