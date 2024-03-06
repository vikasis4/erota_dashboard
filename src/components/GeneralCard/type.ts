import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

export interface NavProp {
    navigation: NativeStackScreenProps<any, any>
};
export interface DataType {
    name: string;
    email: string;
    _id: string;
}
export interface CardType {
    data: DataType;
    num: number;
    TopComp: React.JSX.Element,
    LeftComp: React.JSX.Element,
    RightComp: React.JSX.Element,
}