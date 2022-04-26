import { View } from "./components/View";
import { DeliveryList } from "./components/DeliveryList";
import { ModalEdit } from "./components/ModalEdit";

export const App = () => {
  return (
    <View>
      <DeliveryList />
      <ModalEdit />
    </View>
  );
};
