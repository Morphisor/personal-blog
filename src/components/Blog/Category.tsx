import { cx } from "../../utils";
import Link from "next/link";

interface Props {
    link: string,
    name: string,
    active: boolean,
    className?: string
}

export function Category(props: Props) {
    return (
        <Link 
            href={props.link} 
            className={cx(
                "inline-block py-1.5 md:py-2 px-6 md:px-10 m-2 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200", 
                props.className ?? "",
                props.active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light text-dark dark:bg-dark dark:text-light")}
        >#{props.name}</Link>
    )
}