import React from "react";
import Button from "./Button";

const Header: React.FC = () => {
    return (
        <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 mx-auto max-w-[1200px] flex justify-between items-center shadow-sm">
            <h1 className="flex align-middle font-black pl-2 text-2xl">SAMPLE</h1>

            <div className="flex gap-2">
                <Button>BUTTON</Button>
                <Button>BUTTON</Button>
                <Button>BUTTON</Button>
            </div>
        </div>
    )
}

export default Header;