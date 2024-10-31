import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Favorites from "../pages/favorites";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  home: undefined;
  detail: undefined;
  favorites: undefined;
};

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
