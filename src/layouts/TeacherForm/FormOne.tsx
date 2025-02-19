import InputForm from '~/components/TeacherForm/InputForm';
import TextAreaForm from '~/components/TeacherForm/TextAreaForm';

function FormOne({ children }: any) {
    return (
        <div className="w-full py-5">
            <div className="w-[45%] ml-[17%] h-full flex flex-col gap-5">
                {/* //subject */}
                <div className="w-full flex justify-start items-center">
                    <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                        Chủ đề
                    </div>
                    <InputForm />
                </div>
                {/* //description  */}
                <div className="w-full flex justify-start items-center ">
                    <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                        Mô tả
                    </div>
                    <TextAreaForm />
                </div>
                {/* //list assitant */}
                <div className="w-full flex justify-start items-center ">
                    <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                        Trợ giảng
                    </div>
                    <div className="flex-1 relative z-[11]">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default FormOne;
