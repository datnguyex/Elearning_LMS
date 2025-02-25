import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HandleTypeClassAction } from 'src/redux/Action';
import { EyeGrey, Paperplane, Search, Upaperclip } from 'src/assets/Icons/Icons';
import { TeacherImg } from 'src/assets/images';
import ChatList from 'src/components/QuestionAndAnswer/ChatList';
import TableChat from 'src/components/QuestionAndAnswer/TableChat';
import { StoreReducer } from 'src/redux/Store';
import { useSelector } from 'react-redux';

function QuestionAndAnswer() {
    //file input ref
    const fileInputRef = useRef<any>(null);

    //response type state
    const [responseType, setResponseType] = useState(false);

    //type filter state
    const [typeFilters, setTypeFilters] = useState(1);

    //set chat choosen type
    const [chatChoosen, setChatChoosen] = useState<number>();

    const [chats, setChats] = useState(
        Array(10)
            .fill(null)
            .map((_, index) => ({
                id: index,
                name: 'Nguyễn Ngọc Ngạn',
                message: 'Alo alo 1234 nghe hong???',
                read: index % 2 === 0,
                time: '13:14',
            })),
    );

    //set chat choosen function
    const handleSetChatChoosen = (e: number) => {
        setChatChoosen(e);
    };

    //click to file input ref function
    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleSetResponseType = (e: boolean) => {
        setResponseType(e);
    };

    //open video/img files in your computer function
    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Chọn file:', file);
        }
    };

    //type filter function
    const handleSetTypeFilter = (e: number) => {
        setTypeFilters(e);
    };

    return (
        <>
            {/* h-a1080 w-1920 */}
            {/* //type filter */}
            <div className="w-[38%] h-[36px] rounded flex mt-6">
                <div
                    onClick={() => handleSetTypeFilter(1)}
                    className={`text-[#373839] cursor-pointer text-lg border rounded ${
                        typeFilters === 1
                            ? 'border-[#823b00] border bg-[#fff9f4]' // áp dụng border và background khi typeFilters === 1
                            : 'opacity-50' // giảm opacity nếu không phải 1
                    } font-bold  font-Mulish tracking-tight flex justify-center items-center h-full w-[25%]`}
                >
                    Tất cả câu hỏi
                </div>
                <div
                    onClick={() => handleSetTypeFilter(2)}
                    className={`text-[#373839] cursor-pointer text-lg rounded ${
                        typeFilters === 2
                            ? 'border-[#823b00] border bg-[#fff9f4] ' // áp dụng border và background khi typeFilters === 2
                            : 'opacity-50' // giảm opacity nếu không phải 2
                    } font-bold  font-Mulish tracking-tight flex justify-center items-center h-full w-[25%]`}
                >
                    Tất cả câu hỏi
                </div>
                <div
                    onClick={() => handleSetTypeFilter(3)}
                    className={`text-[#373839] cursor-pointer text-lg rounded ${
                        typeFilters === 3
                            ? 'border-[#823b00] border bg-[#fff9f4]' // áp dụng border và background khi typeFilters === 3
                            : 'opacity-50' // giảm opacity nếu không phải 3
                    } font-bold  font-Mulish tracking-tight flex justify-center items-center h-full w-[25%]`}
                >
                    Gần đây nhất
                </div>
                <div
                    onClick={() => handleSetTypeFilter(4)}
                    className={`text-[#373839] cursor-pointer text-lg rounded ${
                        typeFilters === 4
                            ? 'border-[#823b00] border bg-[#fff9f4]' // áp dụng border và background khi typeFilters === 4
                            : 'opacity-50' // giảm opacity nếu không phải 4
                    } font-bold  font-Mulish tracking-tight flex justify-center items-center h-full w-[25%]`}
                >
                    Topics
                </div>
            </div>

            <div className="w-[98.5%] max-h-[72%] max-w-[98.5%] relative rounded-lg  rounded-br-lg rounded-bl-lg mt-6 ">
                <div className="flex w-full h-full items-start gap-6">
                    {/* //item Left */}
                    <div className="w-[32%] max-h-[99.5%] bg-white shadow-statiticsResultStudy rounded overflow-auto">
                        {/* //search */}
                        <div className="w-[70%] mt-7 ml-10 h-10 bg-[#efefef] rounded-2xl relative overflow-hidden flex pr-3">
                            <div className=" w-[12%] ml-2  h-full left-0 top-0 bg-transparent flex items-center justify-center">
                                <Search />
                            </div>
                            <input
                                placeholder=" Tìm kiếm theo tên topic"
                                className="h-full pl-2 outline-none  opacity-50 text-[#373839] text-lg w-[100%] max-w-[100%] bg-transparent pr-[5px] font-normal font-sourceSansPro flex items-center italic"
                            ></input>
                        </div>
                        {/* chatList */}
                        <div className="w-[85%] mt-4 mx-auto flex flex-col gap-2">
                            <ChatList
                                chats={chats}
                                chatChoosen={chatChoosen}
                                handleSetChatChoosen={handleSetChatChoosen}
                            />
                        </div>
                    </div>
                    {/* //item Right */}
                    <div className="w-[70%] max-h-[99.5%] h-[99.5%] bg-white shadow-statiticsResultStudy rounded relative overflow-hidden flex flex-col justify-between">
                        {/* //chat student */}
                        <TableChat responseType={responseType} handleSetResponseType={handleSetResponseType} />
                        {responseType == true ? (
                            <div className="w-[90%] rounded-lg border border-[#c8c4c0] h-[142px] relative mx-auto mb-5">
                                <div className="flex items-center">
                                    <div className="cursor-pointer" onClick={handleClick}>
                                        <Upaperclip width={'20px'} height={'20px'} />
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />

                                    <input
                                        className="flex items-start italic w-full outline-none bg-transparent opacity-50 text-[#373839] text-base font-normal font-sourceSansPro placeholder:text-[#373839] focus:text-[#000000] focus:font-bold bg-white"
                                        type="text"
                                        placeholder="Nhập câu trả lời"
                                    />
                                </div>
                                <div className="absolute top-[12%] right-[3%] cursor-pointer">
                                    <Paperplane width={'20px'} height={'20px'} />
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionAndAnswer;
