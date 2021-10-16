import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium soluta ea aperiam, at eligendi autem odit iure. Temporibus adipisci aut officiis, dolorum amet eligendi facilis beatae possimus omnis nisi, incidunt illo dolores commodi nulla suscipit repellat eum. Illo saepe in perspiciatis adipisci. Nulla dolorum deserunt optio porro, repudiandae corporis.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium soluta ea aperiam, at eligendi autem odit iure. Temporibus adipisci aut officiis, dolorum amet eligendi facilis beatae possimus omnis nisi, incidunt illo dolores commodi nulla suscipit repellat eum. Illo saepe in perspiciatis adipisci. Nulla dolorum deserunt optio porro, repudiandae corporis.",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
        style={{ paddingTop: 10 }}
      />
    </Screen>
  );
}

export default MessagesScreen;
