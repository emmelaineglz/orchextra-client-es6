export default class User {
    /**
     *
     * @param user
     */
    constructor(user){
        this.user = user
    }
    /**
     *
     * @returns languageCode
     */
    get languageCode(){
        return this.user.languageCode
    }
    /**
     *
     * @returns role
     */
    get role(){
        return this.user.role
    }
    /**
     *
     * @returns password
     */
    get password(){
        return this.user.password
    }
    /**
     *
     * @returns email
     */
    get email(){
        return this.user.email
    }

    /**
     * @returns name
     */
    get name(){
        return this.user.name
    }

    /**
     *
     * @returns username
     */
    get username(){
        return this.user.username
    }

    /**
     *
     * @returns projectIds
     */
    get projectIds(){
        return this.user.projectIds
    }
}