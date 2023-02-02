import classes from "./navbar.module.css"     //название classes можно менять(условное обозначение для проекта)

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Message</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    )
}
