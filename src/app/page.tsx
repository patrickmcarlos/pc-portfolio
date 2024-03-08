import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-row w-full justify-evenly">
                <div className="p-12">
                    <h1 className="text-6xl font-semibold">Patrick Carlos</h1>
                    <p className="text-lg font-">
                        Frontend Engineer @ <b>Amazon SageMaker</b>
                    </p>
                    <p className="text-lg font-thin">
                        Previously @ <b>Motive.io</b>
                    </p>
                </div>
                <div className="p-12">Some content here</div>
            </div>
        </main>
    );
}
