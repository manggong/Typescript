import { makeRandomNumber } from "../utils/makeRandomNumber"; // 모듈 파일을 하나의 객체로 봄
import IPerson from "./IPerson";

let MAX_AGE = 100;

export default class Person implements IPerson {
  constructor(public name: string, public age: number = makeRandomNumber()) {}
}

export const makePerson = (
  name: string,
  age: number = makeRandomNumber()
): IPerson => ({ name, age });
