export function isNullOrEmptyJson(object: any){
    try {
        if(Object.keys(object).length==0){
            return null;
        }
        return 1;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function isUserLogin(object: any){
    try {
        if(Object.keys(object).length==0){
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
