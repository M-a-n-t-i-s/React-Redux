import React from "react";
import styles from "./Paginator.module.css";



let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div>
            {
                slicedPages.map(p => {
                    return <span className={currentPage === p && styles.selectedPage} onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>
                })
            }

        </div>


}
export default Paginator