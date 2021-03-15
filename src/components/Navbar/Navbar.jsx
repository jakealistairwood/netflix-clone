import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [ navbarScroll, setNavbarScroll ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                setNavbarScroll(true);
            } else {
                setNavbarScroll(false);
            } 
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        // !navbarScroll ? "navbar" : "navbar__active"
        // <nav className={`${!navbarScroll ? `${styles.navbar}` : `${styles.navbar__active}`}`}>
        <nav className={styles.navbar}>
            <div className={styles.navbar__left}>
                <div className={styles.navbar__logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="276.742" viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26"/></svg>
                </div>
                <ul className={styles.navbar__linksLeft}>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>TV Shows</li></a>
                    <a href=""><li>Movies</li></a>
                    <a href=""><li>New & Popular</li></a>
                    <a href=""><li>My List</li></a>
                </ul>
            </div>    
            <div className={styles.navbar__right}>
                <div className={styles.icon__container}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.81775 17.3401C14.236 17.3401 17.8177 13.7584 17.8177 9.34009C17.8177 4.92181 14.236 1.34009 9.81775 1.34009C5.39947 1.34009 1.81775 4.92181 1.81775 9.34009C1.81775 13.7584 5.39947 17.3401 9.81775 17.3401Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.8178 19.34L15.4678 14.99" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <a href="">KIDS</a>
                <div className={styles.icon__container}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8177 11.3401V21.3401H2.81775V11.3401" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.8177 6.34009H0.817749V11.3401H20.8177V6.34009Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.8177 21.3401V6.34009" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.8177 6.34009H6.31775C5.65471 6.34009 5.01882 6.0767 4.54998 5.60785C4.08114 5.13901 3.81775 4.50313 3.81775 3.84009C3.81775 3.17705 4.08114 2.54116 4.54998 2.07232C5.01882 1.60348 5.65471 1.34009 6.31775 1.34009C9.81775 1.34009 10.8177 6.34009 10.8177 6.34009Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.8177 6.34009H15.3177C15.9808 6.34009 16.6167 6.0767 17.0855 5.60785C17.5544 5.13901 17.8177 4.50313 17.8177 3.84009C17.8177 3.17705 17.5544 2.54116 17.0855 2.07232C16.6167 1.60348 15.9808 1.34009 15.3177 1.34009C11.8177 1.34009 10.8177 6.34009 10.8177 6.34009Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={styles.icon__container}>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8177 7.34009C15.8177 5.74879 15.1856 4.22267 14.0604 3.09745C12.9352 1.97223 11.409 1.34009 9.81775 1.34009C8.22645 1.34009 6.70033 1.97223 5.57511 3.09745C4.44989 4.22267 3.81775 5.74879 3.81775 7.34009C3.81775 14.3401 0.817749 16.3401 0.817749 16.3401H18.8177C18.8177 16.3401 15.8177 14.3401 15.8177 7.34009Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.5478 20.3401C11.372 20.6432 11.1196 20.8947 10.816 21.0696C10.5124 21.2445 10.1681 21.3365 9.81777 21.3365C9.46739 21.3365 9.12316 21.2445 8.81954 21.0696C8.51593 20.8947 8.26358 20.6432 8.08777 20.3401" fill="white"/>
                        <path d="M11.5478 20.3401C11.372 20.6432 11.1196 20.8947 10.816 21.0696C10.5124 21.2445 10.1681 21.3365 9.81777 21.3365C9.46739 21.3365 9.12316 21.2445 8.81954 21.0696C8.51593 20.8947 8.26358 20.6432 8.08777 20.3401" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <img src="https://occ-0-279-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVBAGh4joXctsR_a280W9q9jlJsS-ElsYcSti17ZN6LEt_aQXPqOEZRqx9EbMEDcM8aDKivOjrHFH9gH8bezuhM.png?r=435" alt="user_icon"/>
            </div>    
        </nav>
    )
}

export default Navbar;