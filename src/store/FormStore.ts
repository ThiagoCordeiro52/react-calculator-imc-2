import { observable, makeObservable, action } from 'mobx';
import { createContext } from 'react';

class FormStore {
  heightField: number = 0;
  weightField: number = 0;
  constructor() {
    makeObservable(this, {
      heightField: observable,
      weightField: observable,
      setHeightField: action,
      setWeightField: action,
    });
  }

  setHeightField = (value: number) => {
    this.heightField = value;
  };

  setWeightField = (value: number) => {
    this.weightField = value;
  };
}

export default createContext(new FormStore());
