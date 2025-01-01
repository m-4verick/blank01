import Button from './Button';

const Hero: React.FC = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-5 grid gap-5 min-h-[800px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 shadow-sm relative">
                <p>Content 1</p>
                <Button className="absolute bottom-4 right-4">BUTTON</Button>
            </div>
            <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 shadow-sm relative">
                <p>Content 2</p>
                <Button className="absolute bottom-4 right-4">BUTTON</Button>
            </div>
            <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 shadow-sm relative">
                <p>Content 3</p>
                <Button className="absolute bottom-4 right-4">BUTTON</Button>
            </div>
            <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 shadow-sm relative">
                <p>Content 4</p>
                <Button className="absolute bottom-4 right-4">BUTTON</Button>
            </div>
            <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 shadow-sm relative">
                <p>Content 5</p>
                <Button className="absolute bottom-4 right-4">BUTTON</Button>
            </div>
            <div className="bg-zinc-50 border border-zinc-300 rounded-lg p-4 shadow-sm relative">
                <p>Content 6</p>
                <Button className="absolute bottom-4 right-4">BUTTON</Button>
            </div>
        </div>
    );
}

export default Hero;
