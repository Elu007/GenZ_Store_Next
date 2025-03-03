import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constans";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href='/' className="flex-start">
                        <Image className="bg-black rounded-full border border-gray-300 p-1" src='/images/logo.svg' alt={`${APP_NAME} logo`}
                            height={56} width={56} priority={true} />
                        <span className="hidden lg:block font-bold text-2xl ml-3">
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
}

export default Header;