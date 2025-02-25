import { EyeGrey } from 'src/assets/Icons/Icons';
import { TeacherImg } from 'src/assets/images';

// Define the structure of a chat object

// Define props for the ChatList component
interface ChatListProps {
    chats: any[];
    chatChoosen: number | undefined;
    handleSetChatChoosen: (index: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, chatChoosen, handleSetChatChoosen }) => {
    return (
        <>
            {chats.map((chat, index) => (
                <div
                    key={chat.id}
                    onClick={() => handleSetChatChoosen(index)}
                    className={`h-[12%] w-full rounded-lg cursor-pointer py-3 pl-5 overflow-hidden flex items-center relative ${
                        chatChoosen === index ? 'bg-[#f0f3f6]' : ''
                    }`}
                >
                    <img className="object-cover h-[35px] w-[35px] rounded-[50%]" src={TeacherImg} alt="" />
                    <div className="ml-4 flex flex-col justify-center">
                        <div
                            className={`text-[#373839] text-lg ${
                                chat.read ? 'font-normal' : 'font-bold'
                            } font-sourceSansPro tracking-tight`}
                        >
                            {chat.name}
                        </div>
                        <div
                            className={`text-[#373839] text-base ${
                                chat.read ? 'font-normal' : 'font-bold'
                            } font-sourceSansPro tracking-tight`}
                        >
                            {chat.message}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center absolute right-5 top-[50%] translate-y-[-50%] gap-2">
                        <div className="flex items-center justify-center">
                            <EyeGrey width={'13px'} height={'13px'} />
                            <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                13
                            </div>
                        </div>
                        <div className="opacity-50 text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                            {chat.time}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ChatList;
