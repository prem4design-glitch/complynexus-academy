import React from 'react';
import Book1 from '../../assets/book-1.png';
import Book2 from '../../assets/book-2.png';

const books = [
    {
        id: 1,
        title: 'The Compliance Handbook',
        tag: 'Compliance',
        author: 'James Carter',
        pages: 320,
        avg: '69%',
        progress: 69,
        status: 'Active',
        readers: 5,
        finished: '40%',
        image: Book1,
    },
    {
        id: 2,
        title: 'Privacy by Design',
        tag: 'Privacy',
        author: 'Ann Cavoukian',
        pages: 248,
        avg: '64%',
        progress: 64,
        status: 'Active',
        readers: 5,
        finished: '40%',
        image: Book2,
    }
];

export const BookSnapshot: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full mt-4">
            <div className="flex items-center justify-between w-full">
                <h4 className="h4 text-(--black) m-0">Book Snapshot</h4>
                <button className="text-(--primary) body-2 flex items-center gap-2 cursor-pointer bg-transparent border-none">
                    View More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full">
                {books.map((book) => (
                    <div key={book.id} className="bg-white border border-(--border-card) rounded-[12px] flex flex-row items-stretch overflow-hidden w-full">
                        {/* Left side: Book Cover Image */}
                        <div className="w-[294px] shrink-0 h-full relative overflow-hidden bg-[#fafafa]">
                            <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Right side: Content Details */}
                        <div className="flex flex-col gap-[20px] p-[16px] flex-1 min-w-0">
                            {/* Title Segment */}
                            <div className="flex flex-col gap-[6px] w-full items-start overflow-hidden">
                                <div className="flex items-center justify-between h-[25px] w-full gap-[10px]">
                                    <p className="font-medium text-[16px] leading-[22px] text-[#1a1a1a] m-0 truncate">
                                        {book.title}
                                    </p>
                                    <div className="bg-(--primary-10) px-[7px] py-[2px] rounded-[5px] shrink-0 flex items-center justify-center">
                                        <p className="font-medium text-[12px] leading-[16px] text-(--primary) m-0 whitespace-nowrap">
                                            {book.tag}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#aaa] text-[14px] leading-[20px] m-0 truncate w-full">
                                    by {book.author} · {book.pages} pages
                                </p>

                                {/* Progress Bar Segment */}
                                <div className="flex gap-[15px] items-center h-[20px] w-full mt-1">
                                    <div className="bg-[#e8e8e8] flex-1 w-full h-[5px] rounded-full overflow-hidden shrink-0">
                                        <div
                                            className="bg-[#555] h-full rounded-full"
                                            style={{ width: `${book.progress}%` }}
                                        />
                                    </div>
                                    <div className="shrink-0 text-right">
                                        <p className="text-[#aaa] text-[14px] m-0 whitespace-nowrap">
                                            {book.avg}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Data Section */}
                            <div className="flex items-center gap-[46px] w-full">
                                <div className="flex flex-col gap-[6px] items-center justify-center shrink-0 w-[58px]">
                                    <p className="text-[#aaa] text-[14px] m-0 whitespace-nowrap">Status</p>
                                    <div className="bg-[#e8f4e8] rounded-full px-3 py-[2.5px] shrink-0 flex items-center justify-center h-[24px]">
                                        <p className="font-medium text-[12.5px] text-[#2e7d32] m-0 whitespace-nowrap">{book.status}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px] items-center justify-center shrink-0 w-[58px]">
                                    <p className="text-[#aaa] text-[14px] m-0 whitespace-nowrap">Readers</p>
                                    <p className="font-medium text-[16px] leading-[22px] text-[#1a1a1a] m-0 whitespace-nowrap">{book.readers}</p>
                                </div>
                                <div className="flex flex-col gap-[6px] items-center justify-center shrink-0 w-[59px]">
                                    <p className="text-[#aaa] text-[14px] m-0 whitespace-nowrap">Finished</p>
                                    <p className="font-medium text-[16px] leading-[22px] text-[#1a1a1a] m-0 whitespace-nowrap">{book.finished}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
