import { takeEvery } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "./constants";


function* userList(){
  // console.warn("saga function called");
  const url = "https://dummyjson.com/users";
  let data = yield fetch(url)
  data = yield data.json();
  // console.warn("data in saga", data);
  yield put({
    type : SET_USER_DATA,
    payload
  })
}

function* SagaData(){   // ye hmara main function hai, jisme phle saare function call hoyenge, fir sync honge aage
  yield takeEvery(USER_LIST,userList);

}

export default SagaData;


//  IMP :
//  Jab bhi hum Saga ke sath function bnayenge waha pr function ke sath * symbol lgayenge also know as generator function
//  WHY WHY WHY WHY WHY

// Kyoki ye bhi async data ko handle karne ke liye ya fir
// function ko iteratable bnake usko excute karna chahte hai, waha pr iska use hota hai