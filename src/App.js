import logo from './logo.svg';
import './App.css';
import { CHANGE_NUMBER } from "./actions"

function App() {
  return (
    <div className="App">
        <MainApp2 />
    </div>
  );
}

const changeNumber = (dispatch) => (number) => {
    dispatch ({
        type: CHANGE_NUMBER,
        payload: number,
    })
}

export const MainApp2 = ({newId}) => {
    const dispatch = useDispatch();

    const { value: numberValue, userValue} = useSelector((state) => state.number);

    /*
    const submitHandler = (e) => {
        e.preventDefault();

        changeNumber(dispatch)(userValue);
    }
    */

    const saveClickHandler = (e) => {

    }

    const cancelClickHandler = (e) => {
      
    }

    const editClickHandler = (e) => {
      
    }

    const deleteClickHandler = (e) => {
      
    }


    return (
        <form onSubmit={/*submitHandler*/}>
            <div>
                <input
                    type="text"
                    required
                    value={userValue1}
                    onChange={(e) => {
                        dispatch({
                            type: SET_USER_VALUE,
                            payload: e.target.value,
                        });
                    }}
                />
                <input
                    type="number"
                    required
                    value={userValue2}
                    onChange={(e) => {
                        dispatch({
                            type: SET_USER_VALUE,
                            payload: e.target.value,
                        });
                    }}
                />
                <button onClick={saveClickHandler}>Save</button>
                <button onClick={cancelClickHandler}>Cancel</button>
            </div>
            {numberValue1}
            {numberValue2}
            <button onClick={editClickHandler}>Edit</button>
            <button onClick={deleteClickHandler}>Delete</button>            
        </form>
    );
}

export default App;
