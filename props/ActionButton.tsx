import React from "react";
import { Button } from "react-native";

interface ActionButtonProps {
  title: string;
  Press: () => void;
}

// Child Component receiving a function prop
const ActionButton: React.FC<ActionButtonProps> = ({ title, Press }) => {
  return <Button title={title} onPress={Press} />;
};

export default ActionButton ;
