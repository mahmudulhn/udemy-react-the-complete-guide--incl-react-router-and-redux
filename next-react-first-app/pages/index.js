import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
    return <Fragment>
        <h1>The Home Page</h1>
        <ul>
            <li>
                <Link href='./news/next-is-a-great-framework'>
                    NextJS is a great framework
                </Link>
            </li>
            <li>Something Else</li>
        </ul>
    </Fragment>
}

export default HomePage;