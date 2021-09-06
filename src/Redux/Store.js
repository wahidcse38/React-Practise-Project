import { createStore } from "redux";
import Reducer from "./Reducer";


const myStore = createStore(Reducer);
export default myStore;