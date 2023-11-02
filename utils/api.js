import { _GET, _POST, _PATCH, _DELETE } from "./request";
class User {

    _authenticate = () => _GET('/api/user/authenticate')
    _create = (data) => _POST('/api/user/login', data)
    _delete = (_id) => _DELETE(`/api/user/delete-account/${_id}`)

}

export const Api = {
    _user : new User()
}