import { useEffect } from "react";
import {createConnection} from "./chat.js";

export default function OpenChatRoom(){
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
    }, []);
    return <h1>채팅방에 오신것을 환영합니다.</h1>
}