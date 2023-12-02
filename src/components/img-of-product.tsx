import Image from "next/image";
import equilibrium from "../../public/image-equilibrium.jpg"

export function ImgOfProduct() {
    return (
        <Image src={equilibrium} alt="image equilibrium" className="rounded-xl" />
    )
}