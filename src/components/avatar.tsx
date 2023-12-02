import Image from "next/image";
import avatar from "../../public/image-avatar.png"

export function Avatar() {
    return (
        <div className="bg-white rounded-full p-[1px] w-fit">
            <Image src={avatar} alt="avatar" className="w-9" />
        </div>
    )
}