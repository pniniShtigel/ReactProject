import { observable, makeObservable, action, computed } from 'mobx';

class AppStore {
    isLogin = false;
    isEditData = false;
    isErrorLogin = false;
    isAddService = false;
    isAddMeeting = false;
    isAble=true;
    constructor() {
        makeObservable(this, {
            isAble:observable,
            isAddMeeting: observable,
            isLogin: observable,
            isEditData: observable,
            isErrorLogin: observable,
            isAddService: observable,
            setIsErrorLogin: action,
            setIsAddMeeting: action,
            setIsAddService: action,
            setIsLogin: action,
            setIsEditData: action,
            getIsErrorLogin: computed,
            getIsAddService: computed,
            getIsAddMeeting: computed,
            getIsEditData: computed,
            getIsLogin: computed
        })
    }
    setIsAble = (val) => {
        this.isAble = val;
    }
    get getIsAble() {
        return this.isAble;
    }
    setIsAddMeeting = (val) => {
        this.isAddMeeting = val;
    }
    get getIsAddMeeting() {
        return this.isAddMeeting;
    }
    setIsAddService = (val) => {
        this.isAddService = val;
    }
    get getIsAddService() {
        return this.isAddService;
    }
    setIsEditData = (val) => {
        this.isEditData = val;
    }
    get getIsEditData() {
        return this.isEditData;
    }
    get getIsErrorLogin() {
        return this.isErrorLogin;
    }
    setIsErrorLogin = (val) => {
        this.isErrorLogin = val;
    }
    setIsLogin = (val) => {
        this.isLogin = val;
    }
    get getIsLogin() {
        return this.isLogin;
    }

}

export default new AppStore();