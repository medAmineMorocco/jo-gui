import { notification } from "antd";

export function notify(description) {
  notification["error"]({
    message: "Erreur",
    description: description,
  });
}
