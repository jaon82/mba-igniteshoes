import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Name",
    user_email: "e-mail@email.com",
  });
}

export function tagCartUpdate(itemsCount: number) {
  OneSignal.User.addTags({
    cart_items_count: itemsCount.toString(),
  });
}
