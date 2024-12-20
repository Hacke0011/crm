import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import user from "../views/auth-views/auth-reducers/UserSlice"
import role from 'views/app-views/hrm/RoleAndPermission/RoleAndPermissionReducers/RoleAndPermissionSlice'
import empdata from "../views/app-views/hrm/Employee/EmployeeReducers/EmployeeSlice"

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        user,
        role,
        empdata,
        // employee,
        // department,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
