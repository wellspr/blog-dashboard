import Link from "next/link";

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link href={"/posts"} className="header__nav__link">
                    Posts
                </Link>
                <Link href={"/posts/create"} className="header__nav__link">
                    Write
                </Link>
            </nav>
        </header>
    );
}