import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Eventগুছাই`
    },[title])
}
 export default UseTitle