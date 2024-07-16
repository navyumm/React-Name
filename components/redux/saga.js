import { takeEvery } from "redux-saga/effects";
import { USER_LIST } from "./constants";


function* userList(){
  console.warn("saga function called");
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