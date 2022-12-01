import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {addPosts} from "../redux/blog/action";

export const fetchPosts = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(true)

    useEffect(() => {
        if (state) {
            fetch(
                'https://script.googleusercontent.com/macros/echo?user_content_key=wcIYok3bbGI0n0gablc4-TVxLOWV0mTx6wWD54CJh6Nd7c0OJ-RGK-P6dT6ZZsKsCRS2HnBc8UdOHD69ivs3qU6kikaXHjFXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD4CDafbkL53eSsSnmO7GhmNeXTmlL9sQXnhfVIOZb5cTE2POZzVY-6vSIz7ZhUoaTh9w5-98UQ8OccwGPAn_9x3JLgLd_ysrg&lib=Mqs-mm0RQ6UTSjcPlIJ_BGb6dCzuayJHH')
                .then(response => response.json())
                .then(data => {
                    dispatch(addPosts(data))
                    setState(false)
                })
        }
    }, )
    return {state}
}
