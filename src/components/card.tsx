import { ImgOfProduct } from "./img-of-product";
import { Title } from "./title";
import { Text } from "./text";
import { Price } from "./price";
import { DaysLeft } from "./days-left";
import { Avatar } from "./avatar";
import { CreationOf } from "./creation-of";

export function Card() {
    return (
        <div className="flex flex-col gap-5 w-[330px] bg-Very-dark-blue(card-BG) rounded-2xl p-5">
            <ImgOfProduct />
            <div className="flex flex-col gap-3">
                <Title />
                <Text />
            </div>
            <div className="flex justify-between">
                <Price />
                <DaysLeft />
            </div>
            <div className="w-full h-[1px] bg-Very-dark-blue(line)"></div>
            <div className="flex items-center justify-start gap-4">
                <Avatar />
                <CreationOf />
            </div>
        </div>
    )
}