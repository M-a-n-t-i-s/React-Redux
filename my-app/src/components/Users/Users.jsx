import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, ...props}) => {



    return <div>
        <Paginator currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount} onPageChanged={onPageChanged}/>
        <div>
            {
                users.map(u => <User
                    key={u.id}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    user={u}/>)
            }
        </div>
    </div>
}
export default Users