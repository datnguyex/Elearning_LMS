import { Search } from 'src/assets/Icons/Icons';

function SearchComponent() {
    return (
        <>
            <div className=" w-[25%] h-10 bg-[#efefef] rounded-2xl relative overflow-hidden flex pr-3">
                <div className=" w-[12%] h-full left-0 top-0 bg-transparent flex items-center justify-center">
                    <Search />
                </div>
                <input
                    placeholder=" Tìm kiếm theo tên topic"
                    className=" h-full left-[12%] outline-none  opacity-50 text-[#373839] text-lg w-[100%] max-w-[100%] bg-transparent pr-[5px] font-normal font-sourceSansPro flex items-center italic"
                ></input>
            </div>
        </>
    );
}

export default SearchComponent;
