import { Instance, onSnapshot, types } from "mobx-state-tree";
import { Cart } from "./Cart";
import { createContext } from "react";

const RootModel = types.model({
    cart:Cart,
    // user: UserModel,
    // product: ProductModel
});

let initialState = RootModel.create({
    cart: { items: []}
});

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
    console.log("Snapshot ", snapshot);
    localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;

export const RootStoreContext = createContext<RootInstance> (rootStore);
