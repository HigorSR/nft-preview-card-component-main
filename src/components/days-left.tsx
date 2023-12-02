import { IconClock } from "@/imgs/icon-clock";

export function DaysLeft() {
    return (
        <div className="flex items-center gap-2">
            <IconClock />
            <p className="text-Soft-blue">3 days left</p>
        </div>
    )
}