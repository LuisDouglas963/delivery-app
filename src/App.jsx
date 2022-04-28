import { View } from "./components/View";
import { DeliveryList } from "./components/DeliveryList";
import { ModalEditItem } from "./components/ModalEditItem";
import { ModalAddItem } from "./components/ModalAddItem";


export const App = () => {
  return (
    <View>
      <DeliveryList />
      <ModalEditItem />
      <ModalAddItem/>
    </View>
  );
};
