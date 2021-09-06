import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import logger from "redux-logger";


const myStore = createStore(Reducer, applyMiddleware(logger));
export default myStore;