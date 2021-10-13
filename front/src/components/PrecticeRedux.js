import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/actions";


const PrecticeRedux = () => {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch()

    return <div style={{ 'textAlign': "center" }}>
        <div>
            <p>Counter:</p>
            <p>{counter}</p>
        </div>

        <div>
            <p>Valuable Information:</p>
            <p>{isLogged ? "true" : "false"}</p>
        </div>

        <div>
            <button
                onClick={() => dispatch(increment())}
            >+</button>
            <button
                onClick={() => dispatch(decrement())}
            >-</button>
        </div>
    </div>
}

export default PrecticeRedux;