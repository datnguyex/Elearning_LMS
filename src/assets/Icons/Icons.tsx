import { IconType } from '~/types/Icon/Icontype';

export const EyeWhite: React.FC<IconType> = ({ width = '28px', height = '21px', color = 'white' }) => {
    return (
        <svg
            // className={`w-auto h-auto`}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.31501 15.9997C4.44454 16.2235 4.61626 16.5088 4.82899 16.8382C5.37538 17.6842 6.18454 18.8093 7.23506 19.9298C9.3577 22.194 12.3254 24.296 16 24.296C19.6747 24.296 22.6424 22.194 24.765 19.9298C25.8155 18.8093 26.6247 17.6842 27.1711 16.8382C27.3838 16.5088 27.5556 16.2235 27.6851 15.9997C27.5556 15.7758 27.3838 15.4906 27.1711 15.1612C26.6247 14.3152 25.8155 13.1901 24.765 12.0695C22.6424 9.80537 19.6747 7.70338 16 7.70338C12.3254 7.70338 9.3577 9.80537 7.23506 12.0695C6.18454 13.1901 5.37538 14.3152 4.82899 15.1612C4.61626 15.4906 4.44454 15.7758 4.31501 15.9997ZM29.0371 15.9997C30.0971 15.4696 30.0969 15.4692 30.0967 15.4688L30.0948 15.465L30.0907 15.4569L30.0773 15.4306C30.066 15.4086 30.05 15.3778 30.0294 15.3389C29.9881 15.2609 29.9283 15.1502 29.8501 15.0112C29.6939 14.7335 29.4639 14.3422 29.1623 13.8752C28.5606 12.9434 27.666 11.6982 26.4943 10.4483C24.1725 7.97175 20.6217 5.33301 16 5.33301C11.3784 5.33301 7.82758 7.97175 5.50579 10.4483C4.33408 11.6982 3.43954 12.9434 2.83778 13.8752C2.53617 14.3422 2.30618 14.7335 2.14995 15.0112C2.07179 15.1502 2.01195 15.2609 1.97072 15.3389C1.95011 15.3778 1.93413 15.4086 1.92283 15.4306L1.90938 15.4569L1.90529 15.465L1.9039 15.4678C1.90368 15.4682 1.90296 15.4696 2.96302 15.9997L1.90296 15.4696C1.73612 15.8033 1.73612 16.196 1.90296 16.5297L2.96302 15.9997C1.90296 16.5297 1.90274 16.5293 1.90296 16.5297L1.90529 16.5343L1.90938 16.5424L1.92283 16.5688C1.93413 16.5908 1.95011 16.6215 1.97072 16.6605C2.01195 16.7384 2.07179 16.8492 2.14995 16.9881C2.30618 17.2659 2.53617 17.6571 2.83778 18.1241C3.43954 19.0559 4.33408 20.3012 5.50579 21.551C7.82758 24.0276 11.3784 26.6663 16 26.6663C20.6217 26.6663 24.1725 24.0276 26.4943 21.551C27.666 20.3012 28.5606 19.0559 29.1623 18.1241C29.4639 17.6571 29.6939 17.2659 29.8501 16.9881C29.9283 16.8492 29.9881 16.7384 30.0294 16.6605C30.05 16.6215 30.066 16.5908 30.0773 16.5688L30.0907 16.5424L30.0948 16.5343L30.0962 16.5316C30.0964 16.5312 30.0971 16.5297 29.0371 15.9997Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9998 13.1549C14.4289 13.1549 13.1554 14.4284 13.1554 15.9993C13.1554 17.5703 14.4289 18.8437 15.9998 18.8437C17.5707 18.8437 18.8442 17.5703 18.8442 15.9993C18.8442 14.4284 17.5707 13.1549 15.9998 13.1549ZM10.311 15.9993C10.311 12.8575 12.858 10.3105 15.9998 10.3105C19.1417 10.3105 21.6886 12.8575 21.6886 15.9993C21.6886 19.1412 19.1417 21.6881 15.9998 21.6881C12.858 21.6881 10.311 19.1412 10.311 15.9993Z"
                fill={color}
            />
        </svg>
    );
};
export const BookWhite: React.FC<IconType> = ({ width = '28', height = '21', color = 'white' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M28.2103 2.91751C27.2558 2.75472 26.2893 2.67093 25.3208 2.667C22.0163 2.66432 18.7808 3.60255 15.9998 5.36987C13.2117 3.62576 9.9767 2.71055 6.67887 2.73292C5.71035 2.73685 4.74384 2.82064 3.78937 2.98343C3.47673 3.0368 3.1936 3.19895 2.99098 3.44067C2.78836 3.68239 2.67956 3.9878 2.68417 4.30191V20.1236C2.68132 20.3173 2.72162 20.5093 2.80221 20.6859C2.88281 20.8624 3.0017 21.0192 3.15045 21.1451C3.2992 21.271 3.47413 21.3629 3.66281 21.4142C3.8515 21.4655 4.04928 21.475 4.2421 21.4421C6.15026 21.1149 8.10525 21.1692 9.9919 21.6017C11.8785 22.0342 13.6587 22.8362 15.2275 23.9604L15.3873 24.0527H15.5338C15.6815 24.1136 15.8399 24.145 15.9998 24.145C16.1598 24.145 16.3182 24.1136 16.4659 24.0527H16.6124L16.7721 23.9604C18.33 22.811 20.1051 21.9831 21.9921 21.5256C23.8791 21.0681 25.8397 20.9904 27.7576 21.297C27.9504 21.33 28.1482 21.3205 28.3369 21.2691C28.5255 21.2178 28.7005 21.1259 28.8492 21.0001C28.998 20.8742 29.1169 20.7174 29.1975 20.5408C29.278 20.3643 29.3184 20.1723 29.3155 19.9786V4.15687C29.3016 3.85646 29.1845 3.56977 28.9835 3.34435C28.7825 3.11892 28.5096 2.96832 28.2103 2.91751ZM14.6683 20.44C12.2047 19.1568 9.46253 18.487 6.67887 18.4887C6.23945 18.4887 5.80004 18.4887 5.3473 18.4887V5.30395C5.79079 5.27864 6.23538 5.27864 6.67887 5.30395C9.51962 5.30084 12.2984 6.12627 14.6683 7.6772V20.44ZM26.6524 18.5414C26.1996 18.5414 25.7602 18.5414 25.3208 18.5414C22.5371 18.5397 19.795 19.2095 17.3314 20.4928V7.6772C19.7013 6.12627 22.4801 5.30084 25.3208 5.30395C25.7643 5.27864 26.2089 5.27864 26.6524 5.30395V18.5414ZM28.2103 24.0131C27.2558 23.8503 26.2893 23.7665 25.3208 23.7626C22.0163 23.7599 18.7808 24.6982 15.9998 26.4655C13.2189 24.6982 9.98333 23.7599 6.67887 23.7626C5.71035 23.7665 4.74384 23.8503 3.78937 24.0131C3.61604 24.0403 3.44985 24.1012 3.30037 24.1923C3.15089 24.2833 3.02106 24.4028 2.91835 24.5437C2.81564 24.6846 2.74208 24.8442 2.70189 25.0134C2.6617 25.1825 2.65568 25.3579 2.68417 25.5294C2.75184 25.8717 2.9538 26.1736 3.24581 26.3688C3.53783 26.5641 3.89608 26.6368 4.2421 26.571C6.15026 26.2438 8.10525 26.2981 9.9919 26.7306C11.8785 27.1631 13.6587 27.965 15.2275 29.0892C15.453 29.2482 15.723 29.3337 15.9998 29.3337C16.2767 29.3337 16.5466 29.2482 16.7721 29.0892C18.341 27.965 20.1211 27.1631 22.0078 26.7306C23.8944 26.2981 25.8494 26.2438 27.7576 26.571C28.1036 26.6368 28.4618 26.5641 28.7539 26.3688C29.0459 26.1736 29.2478 25.8717 29.3155 25.5294C29.344 25.3579 29.338 25.1825 29.2978 25.0134C29.2576 24.8442 29.184 24.6846 29.0813 24.5437C28.9786 24.4028 28.8488 24.2833 28.6993 24.1923C28.5498 24.1012 28.3836 24.0403 28.2103 24.0131Z"
                fill={color}
            />
        </svg>
    );
};
export const ListPenWhite: React.FC<IconType> = ({ width = '28', height = '21', color = 'white' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.6057 22.2803L24.3801 19.0536C24.2562 18.9287 24.1088 18.8295 23.9463 18.7618C23.7839 18.6941 23.6097 18.6592 23.4337 18.6592C23.2578 18.6592 23.0836 18.6941 22.9211 18.7618C22.7587 18.8295 22.6113 18.9287 22.4874 19.0536L17.7156 23.827C17.592 23.9516 17.4943 24.0993 17.428 24.2618C17.3616 24.4242 17.328 24.5982 17.329 24.7736V28.0003C17.329 28.3539 17.4695 28.6931 17.7194 28.9431C17.9694 29.1932 18.3084 29.3336 18.6619 29.3336H21.8876C22.063 29.3347 22.2369 29.301 22.3993 29.2347C22.5617 29.1683 22.7094 29.0705 22.8339 28.947L27.6057 24.1736C27.7307 24.0497 27.8298 23.9022 27.8975 23.7397C27.9652 23.5773 28 23.403 28 23.227C28 23.051 27.9652 22.8767 27.8975 22.7142C27.8298 22.5517 27.7307 22.4043 27.6057 22.2803ZM21.3278 26.667H19.9948V25.3336L23.4337 21.8936L24.7666 23.227L21.3278 26.667ZM13.3303 26.667H7.99871C7.6452 26.667 7.30617 26.5265 7.05621 26.2765C6.80624 26.0264 6.66581 25.6873 6.66581 25.3336V6.66699C6.66581 6.31337 6.80624 5.97423 7.05621 5.72418C7.30617 5.47413 7.6452 5.33366 7.99871 5.33366H14.6632V9.33365C14.6632 10.3945 15.0845 11.4119 15.8344 12.1621C16.5843 12.9122 17.6014 13.3337 18.6619 13.3337H22.6607V14.667C22.6607 15.0206 22.8011 15.3597 23.0511 15.6098C23.301 15.8598 23.6401 16.0003 23.9936 16.0003C24.3471 16.0003 24.6861 15.8598 24.9361 15.6098C25.186 15.3597 25.3265 15.0206 25.3265 14.667V12.0003C25.3265 12.0003 25.3265 12.0003 25.3265 11.9203C25.3126 11.7978 25.2858 11.6772 25.2465 11.5603V11.4403C25.1824 11.3032 25.0969 11.1772 24.9932 11.067L16.9958 3.06699C16.8856 2.96328 16.7597 2.87777 16.6226 2.81366C16.5828 2.80801 16.5424 2.80801 16.5026 2.81366L16.0761 2.66699H7.99871C6.93819 2.66699 5.9211 3.08842 5.1712 3.83856C4.42129 4.58871 4 5.60612 4 6.66699V25.3336C4 26.3945 4.42129 27.4119 5.1712 28.1621C5.9211 28.9122 6.93819 29.3336 7.99871 29.3336H13.3303C13.6838 29.3336 14.0229 29.1932 14.2728 28.9431C14.5228 28.6931 14.6632 28.3539 14.6632 28.0003C14.6632 27.6467 14.5228 27.3075 14.2728 27.0575C14.0229 26.8074 13.6838 26.667 13.3303 26.667ZM17.329 7.21365L20.7813 10.667H18.6619C18.3084 10.667 17.9694 10.5265 17.7194 10.2765C17.4695 10.0264 17.329 9.68728 17.329 9.33365V7.21365ZM10.6645 18.667H18.6619C19.0155 18.667 19.3545 18.5265 19.6044 18.2765C19.8544 18.0264 19.9948 17.6873 19.9948 17.3336C19.9948 16.98 19.8544 16.6409 19.6044 16.3908C19.3545 16.1408 19.0155 16.0003 18.6619 16.0003H10.6645C10.311 16.0003 9.97198 16.1408 9.72201 16.3908C9.47205 16.6409 9.33162 16.98 9.33162 17.3336C9.33162 17.6873 9.47205 18.0264 9.72201 18.2765C9.97198 18.5265 10.311 18.667 10.6645 18.667ZM10.6645 13.3337H11.9974C12.3509 13.3337 12.69 13.1932 12.9399 12.9431C13.1899 12.6931 13.3303 12.3539 13.3303 12.0003C13.3303 11.6467 13.1899 11.3076 12.9399 11.0575C12.69 10.8075 12.3509 10.667 11.9974 10.667H10.6645C10.311 10.667 9.97198 10.8075 9.72201 11.0575C9.47205 11.3076 9.33162 11.6467 9.33162 12.0003C9.33162 12.3539 9.47205 12.6931 9.72201 12.9431C9.97198 13.1932 10.311 13.3337 10.6645 13.3337ZM13.3303 21.3336H10.6645C10.311 21.3336 9.97198 21.4741 9.72201 21.7242C9.47205 21.9742 9.33162 22.3134 9.33162 22.667C9.33162 23.0206 9.47205 23.3597 9.72201 23.6098C9.97198 23.8598 10.311 24.0003 10.6645 24.0003H13.3303C13.6838 24.0003 14.0229 23.8598 14.2728 23.6098C14.5228 23.3597 14.6632 23.0206 14.6632 22.667C14.6632 22.3134 14.5228 21.9742 14.2728 21.7242C14.0229 21.4741 13.6838 21.3336 13.3303 21.3336Z"
                fill={color}
            />
        </svg>
    );
};
export const CalendarWhite: React.FC<IconType> = ({ width = '28', height = '21', color = 'white' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 24.4852C16.2373 24.4852 16.4693 24.4141 16.6667 24.2809C16.864 24.1477 17.0178 23.9584 17.1087 23.7369C17.1995 23.5154 17.2232 23.2717 17.1769 23.0366C17.1306 22.8015 17.0164 22.5855 16.8485 22.416C16.6807 22.2464 16.4669 22.131 16.2341 22.0842C16.0013 22.0375 15.7601 22.0615 15.5408 22.1532C15.3215 22.2449 15.1341 22.4003 15.0022 22.5996C14.8704 22.799 14.8 23.0333 14.8 23.2731C14.8 23.5945 14.9264 23.9028 15.1515 24.1302C15.3765 24.3575 15.6817 24.4852 16 24.4852ZM22 24.4852C22.2373 24.4852 22.4693 24.4141 22.6667 24.2809C22.864 24.1477 23.0178 23.9584 23.1087 23.7369C23.1995 23.5154 23.2232 23.2717 23.1769 23.0366C23.1306 22.8015 23.0164 22.5855 22.8485 22.416C22.6807 22.2464 22.4669 22.131 22.2341 22.0842C22.0013 22.0375 21.7601 22.0615 21.5408 22.1532C21.3215 22.2449 21.1341 22.4003 21.0022 22.5996C20.8704 22.799 20.8 23.0333 20.8 23.2731C20.8 23.5945 20.9264 23.9028 21.1515 24.1302C21.3765 24.3575 21.6817 24.4852 22 24.4852ZM22 19.6367C22.2373 19.6367 22.4693 19.5656 22.6667 19.4324C22.864 19.2992 23.0178 19.1099 23.1087 18.8884C23.1995 18.6669 23.2232 18.4232 23.1769 18.1881C23.1306 17.953 23.0164 17.737 22.8485 17.5675C22.6807 17.398 22.4669 17.2825 22.2341 17.2357C22.0013 17.189 21.7601 17.213 21.5408 17.3047C21.3215 17.3965 21.1341 17.5518 21.0022 17.7511C20.8704 17.9505 20.8 18.1848 20.8 18.4246C20.8 18.746 20.9264 19.0543 21.1515 19.2817C21.3765 19.509 21.6817 19.6367 22 19.6367ZM16 19.6367C16.2373 19.6367 16.4693 19.5656 16.6667 19.4324C16.864 19.2992 17.0178 19.1099 17.1087 18.8884C17.1995 18.6669 17.2232 18.4232 17.1769 18.1881C17.1306 17.953 17.0164 17.737 16.8485 17.5675C16.6807 17.398 16.4669 17.2825 16.2341 17.2357C16.0013 17.189 15.7601 17.213 15.5408 17.3047C15.3215 17.3965 15.1341 17.5518 15.0022 17.7511C14.8704 17.9505 14.8 18.1848 14.8 18.4246C14.8 18.746 14.9264 19.0543 15.1515 19.2817C15.3765 19.509 15.6817 19.6367 16 19.6367ZM24.4 5.09123H23.2V3.87911C23.2 3.55764 23.0736 3.24933 22.8485 3.02201C22.6235 2.7947 22.3183 2.66699 22 2.66699C21.6817 2.66699 21.3765 2.7947 21.1515 3.02201C20.9264 3.24933 20.8 3.55764 20.8 3.87911V5.09123H11.2V3.87911C11.2 3.55764 11.0736 3.24933 10.8485 3.02201C10.6235 2.7947 10.3183 2.66699 10 2.66699C9.68174 2.66699 9.37652 2.7947 9.15147 3.02201C8.92643 3.24933 8.8 3.55764 8.8 3.87911V5.09123H7.6C6.64522 5.09123 5.72955 5.47435 5.05442 6.1563C4.37928 6.83825 4 7.76318 4 8.7276V25.6973C4 26.6617 4.37928 27.5866 5.05442 28.2686C5.72955 28.9505 6.64522 29.3337 7.6 29.3337H24.4C25.3548 29.3337 26.2705 28.9505 26.9456 28.2686C27.6207 27.5866 28 26.6617 28 25.6973V8.7276C28 7.76318 27.6207 6.83825 26.9456 6.1563C26.2705 5.47435 25.3548 5.09123 24.4 5.09123ZM25.6 25.6973C25.6 26.0188 25.4736 26.3271 25.2485 26.5544C25.0235 26.7817 24.7183 26.9094 24.4 26.9094H7.6C7.28174 26.9094 6.97652 26.7817 6.75147 26.5544C6.52643 26.3271 6.4 26.0188 6.4 25.6973V14.7882H25.6V25.6973ZM25.6 12.364H6.4V8.7276C6.4 8.40612 6.52643 8.09782 6.75147 7.8705C6.97652 7.64318 7.28174 7.51548 7.6 7.51548H8.8V8.7276C8.8 9.04907 8.92643 9.35738 9.15147 9.5847C9.37652 9.81201 9.68174 9.93972 10 9.93972C10.3183 9.93972 10.6235 9.81201 10.8485 9.5847C11.0736 9.35738 11.2 9.04907 11.2 8.7276V7.51548H20.8V8.7276C20.8 9.04907 20.9264 9.35738 21.1515 9.5847C21.3765 9.81201 21.6817 9.93972 22 9.93972C22.3183 9.93972 22.6235 9.81201 22.8485 9.5847C23.0736 9.35738 23.2 9.04907 23.2 8.7276V7.51548H24.4C24.7183 7.51548 25.0235 7.64318 25.2485 7.8705C25.4736 8.09782 25.6 8.40612 25.6 8.7276V12.364ZM10 19.6367C10.2373 19.6367 10.4693 19.5656 10.6667 19.4324C10.864 19.2992 11.0178 19.1099 11.1087 18.8884C11.1995 18.6669 11.2232 18.4232 11.1769 18.1881C11.1306 17.953 11.0164 17.737 10.8485 17.5675C10.6807 17.398 10.4669 17.2825 10.2341 17.2357C10.0013 17.189 9.76005 17.213 9.54078 17.3047C9.32151 17.3965 9.13409 17.5518 9.00224 17.7511C8.87038 17.9505 8.8 18.1848 8.8 18.4246C8.8 18.746 8.92643 19.0543 9.15147 19.2817C9.37652 19.509 9.68174 19.6367 10 19.6367ZM10 24.4852C10.2373 24.4852 10.4693 24.4141 10.6667 24.2809C10.864 24.1477 11.0178 23.9584 11.1087 23.7369C11.1995 23.5154 11.2232 23.2717 11.1769 23.0366C11.1306 22.8015 11.0164 22.5855 10.8485 22.416C10.6807 22.2464 10.4669 22.131 10.2341 22.0842C10.0013 22.0375 9.76005 22.0615 9.54078 22.1532C9.32151 22.2449 9.13409 22.4003 9.00224 22.5996C8.87038 22.799 8.8 23.0333 8.8 23.2731C8.8 23.5945 8.92643 23.9028 9.15147 24.1302C9.37652 24.3575 9.68174 24.4852 10 24.4852Z"
                fill={color}
            />
        </svg>
    );
};
export const BellWhite: React.FC<IconType> = ({ width = '28', height = '21', color = 'white' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0785 5.24002C11.6452 3.59521 13.7748 2.66699 16 2.66699C18.2252 2.66699 20.3548 3.59521 21.9215 5.24002C23.4876 6.88407 24.3636 9.10924 24.3636 11.4249C24.3636 15.7169 25.2383 18.3943 26.0528 19.9621C26.4615 20.7486 26.8605 21.2667 27.1402 21.5766C27.2803 21.7318 27.3911 21.8356 27.4593 21.8953C27.4934 21.9251 27.5168 21.9439 27.5279 21.9525C27.5306 21.9547 27.5326 21.9562 27.5338 21.9571C27.9218 22.236 28.0912 22.7413 27.9516 23.2078C27.8108 23.6789 27.3879 24.0003 26.909 24.0003H5.09098C4.61211 24.0003 4.18922 23.6789 4.04835 23.2078C3.90883 22.7413 4.07825 22.236 4.4662 21.9571C4.46742 21.9562 4.46939 21.9547 4.4721 21.9525C4.48319 21.9439 4.50662 21.9251 4.54071 21.8953C4.60886 21.8356 4.71974 21.7318 4.85984 21.5766C5.13948 21.2667 5.53854 20.7486 5.94716 19.9621C6.7617 18.3943 7.63642 15.7169 7.63642 11.4249C7.63642 9.10924 8.51244 6.88407 10.0785 5.24002ZM7.45656 21.7547H24.5434C24.4062 21.5313 24.2671 21.2872 24.1289 21.021C23.1252 19.0893 22.1818 16.0405 22.1818 11.4249C22.1818 9.69063 21.5253 8.03177 20.3636 6.81211C19.2025 5.59321 17.6325 4.91261 16 4.91261C14.3675 4.91261 12.7975 5.59321 11.6364 6.81211C10.4747 8.03177 9.81822 9.69063 9.81822 11.4249C9.81822 16.0405 8.87478 19.0893 7.87114 21.021C7.73285 21.2872 7.59384 21.5313 7.45656 21.7547Z"
                fill={color}
                stroke="white"
                stroke-width="0.25"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.90422 24.1349C10.4403 23.8483 11.1169 24.0332 11.4155 24.5479C11.8875 25.3615 12.5617 26.0315 13.3663 26.4949C14.1705 26.9581 15.0786 27.2001 16.0002 27.2001C16.9217 27.2001 17.8298 26.9581 18.634 26.4949C19.4386 26.0315 20.1129 25.3615 20.5848 24.5479C20.8834 24.0332 21.56 23.8483 22.0961 24.1349C22.6322 24.4215 22.8248 25.0711 22.5263 25.5858C21.8691 26.7187 20.9227 27.6644 19.7773 28.3242C18.6316 28.9841 17.3289 29.3333 16.0002 29.3333C14.6714 29.3333 13.3687 28.9841 12.223 28.3242C11.0777 27.6644 10.1312 26.7187 9.47406 25.5858C9.17552 25.0711 9.3681 24.4215 9.90422 24.1349Z"
                fill={color}
            />
        </svg>
    );
};
export const QuestionCommentWhite: React.FC<IconType> = ({ width = '28', height = '21', color = 'ffff' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.5863 6.69506C21.9265 6.87804 22.3294 6.92613 22.7069 6.82885C23.0844 6.73156 23.406 6.49679 23.6015 6.17576C23.7633 5.90539 24.0152 5.69351 24.3178 5.57335C24.6203 5.45319 24.9565 5.43155 25.2734 5.51183C25.5904 5.5921 25.8703 5.76974 26.0692 6.0169C26.2681 6.26406 26.3747 6.56676 26.3724 6.87752C26.3724 7.24975 26.2163 7.60674 25.9384 7.86995C25.6606 8.13316 25.2837 8.28103 24.8907 8.28103C24.4977 8.28103 24.1208 8.4289 23.8429 8.69211C23.565 8.95531 23.4089 9.3123 23.4089 9.68454C23.4089 10.0568 23.565 10.4138 23.8429 10.677C24.1208 10.9402 24.4977 11.088 24.8907 11.088C25.6709 11.0876 26.4372 10.8926 27.1126 10.5228C27.7881 10.1529 28.3489 9.62119 28.7387 8.98103C29.1285 8.34087 29.3335 7.61482 29.3332 6.87583C29.3329 6.13684 29.1272 5.41095 28.7369 4.77109C28.3466 4.13122 27.7853 3.59993 27.1096 3.23059C26.4338 2.86125 25.6673 2.66687 24.8871 2.66699C24.1069 2.66711 23.3405 2.86172 22.6648 3.23126C21.9892 3.60081 21.4281 4.13227 21.038 4.77225C20.94 4.93244 20.8765 5.10941 20.851 5.29296C20.8256 5.4765 20.8387 5.66301 20.8896 5.84173C20.9406 6.02046 21.0284 6.18786 21.1479 6.33432C21.2675 6.48077 21.4165 6.60337 21.5863 6.69506ZM27.958 16.7021C27.569 16.6543 27.1759 16.7545 26.8648 16.9807C26.5537 17.207 26.35 17.5408 26.2984 17.9091C25.9874 20.2883 24.7687 22.4776 22.8719 24.0649C20.9751 25.6521 18.531 26.5277 15.9999 26.5266H7.71672L8.67988 25.6144C8.95587 25.3514 9.11078 24.9957 9.11078 24.6249C9.11078 24.2541 8.95587 23.8984 8.67988 23.6354C7.23506 22.2615 6.2518 20.5134 5.85395 18.6112C5.4561 16.7091 5.66146 14.7379 6.44416 12.9461C7.22685 11.1542 8.55188 9.62183 10.2523 8.54192C11.9528 7.46202 13.9526 6.88291 15.9999 6.87752C16.3929 6.87752 16.7698 6.72965 17.0477 6.46644C17.3256 6.20323 17.4817 5.84624 17.4817 5.47401C17.4817 5.10178 17.3256 4.74479 17.0477 4.48158C16.7698 4.21837 16.3929 4.0705 15.9999 4.0705C13.4946 4.0804 11.0428 4.75855 8.92556 6.02726C6.8083 7.29598 5.11119 9.10393 4.02864 11.244C2.94609 13.3841 2.5219 15.7697 2.80465 18.1276C3.08741 20.4854 4.06568 22.7202 5.6274 24.5758L3.09354 26.9337C2.88793 27.131 2.74864 27.3817 2.69326 27.6539C2.63788 27.9262 2.66888 28.2079 2.78236 28.4635C2.89352 28.7198 3.0823 28.9392 3.3249 29.0941C3.5675 29.2489 3.85306 29.3323 4.14561 29.3337H15.9999C19.2472 29.3341 22.3831 28.2123 24.8193 26.1787C27.2555 24.1451 28.8246 21.3394 29.2323 18.288C29.2594 18.1045 29.2479 17.9178 29.1984 17.7385C29.1489 17.5593 29.0624 17.3911 28.9439 17.2436C28.8255 17.0962 28.6773 16.9724 28.5081 16.8795C28.3389 16.7865 28.1519 16.7262 27.958 16.7021ZM25.4537 12.5898C25.184 12.4768 24.8847 12.4425 24.5943 12.4916L24.3276 12.5758L24.0609 12.7021L23.8386 12.8845C23.7053 13.0139 23.5996 13.1664 23.5274 13.3337C23.4398 13.5087 23.3991 13.7015 23.4089 13.8951C23.4046 14.0822 23.4398 14.2684 23.5126 14.4424C23.5892 14.6109 23.7 14.7635 23.8386 14.8916C23.977 15.0216 24.1412 15.1245 24.3218 15.1944C24.5023 15.2642 24.6956 15.2996 24.8907 15.2986C25.2837 15.2986 25.6606 15.1507 25.9384 14.8875C26.2163 14.6243 26.3724 14.2673 26.3724 13.8951C26.3775 13.711 26.3369 13.5283 26.2539 13.3617C26.0947 13.0245 25.8098 12.7546 25.4537 12.6038V12.5898Z"
                fill={color}
            />
        </svg>
    );
};

export const EyeGrey: React.FC<IconType> = ({ width = '28', height = '21', color = '#373839' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.23589 12C3.33304 12.1679 3.46183 12.3818 3.62138 12.6289C4.03117 13.2634 4.63804 14.1072 5.42593 14.9476C7.01791 16.6457 9.24368 18.2222 11.9997 18.2222C14.7557 18.2222 16.9814 16.6457 18.5734 14.9476C19.3613 14.1072 19.9682 13.2634 20.378 12.6289C20.5375 12.3818 20.6663 12.1679 20.7635 12C20.6663 11.8321 20.5375 11.6182 20.378 11.3711C19.9682 10.7366 19.3613 9.8928 18.5734 9.05239C16.9814 7.35427 14.7557 5.77778 11.9997 5.77778C9.24368 5.77778 7.01791 7.35427 5.42593 9.05239C4.63804 9.8928 4.03117 10.7366 3.62138 11.3711C3.46183 11.6182 3.33304 11.8321 3.23589 12ZM21.7774 12C22.5725 11.6025 22.5723 11.6022 22.5722 11.6018L22.5707 11.599L22.5677 11.5929L22.5576 11.5732C22.5491 11.5567 22.5371 11.5336 22.5217 11.5044C22.4907 11.446 22.4459 11.3629 22.3872 11.2587C22.2701 11.0503 22.0976 10.7569 21.8714 10.4066C21.4201 9.70783 20.7491 8.77386 19.8704 7.8365C18.129 5.97906 15.4659 4 11.9997 4C8.53344 4 5.87032 5.97906 4.12897 7.8365C3.25019 8.77386 2.57929 9.70783 2.12797 10.4066C1.90176 10.7569 1.72927 11.0503 1.61209 11.2587C1.55347 11.3629 1.5086 11.446 1.47768 11.5044C1.46221 11.5336 1.45023 11.5567 1.44175 11.5732L1.43167 11.5929L1.4286 11.599L1.42756 11.6011C1.4274 11.6014 1.42685 11.6025 2.2219 12L1.42685 11.6025C1.30173 11.8527 1.30173 12.1473 1.42685 12.3975L2.2219 12C1.42685 12.3975 1.42669 12.3972 1.42685 12.3975L1.4286 12.401L1.43167 12.4071L1.44175 12.4268C1.45023 12.4433 1.46221 12.4664 1.47768 12.4956C1.5086 12.554 1.55347 12.6371 1.61209 12.7413C1.72927 12.9496 1.90176 13.2431 2.12797 13.5934C2.57929 14.2922 3.25019 15.2261 4.12897 16.1635C5.87032 18.0209 8.53344 20 11.9997 20C15.4659 20 18.129 18.0209 19.8704 16.1635C20.7491 15.2261 21.4201 14.2922 21.8714 13.5934C22.0976 13.2431 22.2701 12.9496 22.3872 12.7413C22.4459 12.6371 22.4907 12.554 22.5217 12.4956C22.5371 12.4664 22.5491 12.4433 22.5576 12.4268L22.5677 12.4071L22.5707 12.401L22.5718 12.3989C22.5719 12.3986 22.5725 12.3975 21.7774 12ZM21.7774 12L22.5725 12.3975C22.6976 12.1473 22.6973 11.8521 22.5722 11.6018L21.7774 12Z"
                fill={color}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 9.8667C10.8218 9.8667 9.8667 10.8218 9.8667 12C9.8667 13.1782 10.8218 14.1333 12 14.1333C13.1782 14.1333 14.1333 13.1782 14.1333 12C14.1333 10.8218 13.1782 9.8667 12 9.8667ZM7.7334 12C7.7334 9.64362 9.64362 7.7334 12 7.7334C14.3564 7.7334 16.2666 9.64362 16.2666 12C16.2666 14.3564 14.3564 16.2666 12 16.2666C9.64362 16.2666 7.7334 14.3564 7.7334 12Z"
                fill={color}
            />
        </svg>
    );
};
export const ListPenGrey: React.FC<IconType> = ({ width = '28', height = '21', color = '#373839' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
                <path
                    d="M20.7043 16.71L18.2851 14.29C18.1921 14.1963 18.0816 14.1219 17.9598 14.0711C17.8379 14.0203 17.7073 13.9942 17.5753 13.9942C17.4433 13.9942 17.3127 14.0203 17.1909 14.0711C17.069 14.1219 16.9585 14.1963 16.8655 14.29L13.2867 17.87C13.194 17.9634 13.1207 18.0742 13.071 18.1961C13.0212 18.3179 12.996 18.4484 12.9968 18.58V21C12.9968 21.2652 13.1021 21.5196 13.2896 21.7071C13.4771 21.8946 13.7313 22 13.9965 22H16.4157C16.5472 22.0007 16.6777 21.9755 16.7995 21.9258C16.9213 21.876 17.032 21.8027 17.1254 21.71L20.7043 18.13C20.798 18.037 20.8724 17.9264 20.9231 17.8046C20.9739 17.6827 21 17.552 21 17.42C21 17.288 20.9739 17.1573 20.9231 17.0354C20.8724 16.9136 20.798 16.8029 20.7043 16.71ZM15.9958 20H14.9961V19L17.5753 16.42L18.575 17.42L15.9958 20ZM9.99775 20H5.99903C5.7339 20 5.47963 19.8946 5.29216 19.7071C5.10468 19.5196 4.99936 19.2652 4.99936 19V5C4.99936 4.73478 5.10468 4.48043 5.29216 4.29289C5.47963 4.10536 5.7339 4 5.99903 4H10.9974V7C10.9974 7.79564 11.3134 8.55871 11.8758 9.12132C12.4382 9.68392 13.2011 9.99999 13.9965 9.99999H16.9955V11C16.9955 11.2652 17.1008 11.5196 17.2883 11.7071C17.4758 11.8946 17.73 12 17.9952 12C18.2603 12 18.5146 11.8946 18.702 11.7071C18.8895 11.5196 18.9948 11.2652 18.9948 11V8.99999C18.9948 8.99999 18.9948 8.99999 18.9948 8.93999C18.9844 8.84813 18.9643 8.75763 18.9349 8.66999V8.57999C18.8868 8.47717 18.8227 8.38266 18.7449 8.29999L12.7469 2.3C12.6642 2.22222 12.5697 2.15808 12.467 2.11C12.4371 2.10576 12.4068 2.10576 12.377 2.11L12.0571 2H5.99903C5.20364 2 4.44082 2.31607 3.8784 2.87868C3.31597 3.44129 3 4.20435 3 5V19C3 19.7956 3.31597 20.5587 3.8784 21.1213C4.44082 21.6839 5.20364 22 5.99903 22H9.99775C10.2629 22 10.5171 21.8946 10.7046 21.7071C10.8921 21.5196 10.9974 21.2652 10.9974 21C10.9974 20.7348 10.8921 20.4804 10.7046 20.2929C10.5171 20.1053 10.2629 20 9.99775 20ZM12.9968 5.41L15.5859 8H13.9965C13.7313 8 13.4771 7.89464 13.2896 7.7071C13.1021 7.51957 12.9968 7.26521 12.9968 7V5.41ZM7.99839 14H13.9965C14.2616 14 14.5159 13.8946 14.7033 13.7071C14.8908 13.5196 14.9961 13.2652 14.9961 13C14.9961 12.7348 14.8908 12.4804 14.7033 12.2929C14.5159 12.1053 14.2616 12 13.9965 12H7.99839C7.73326 12 7.47899 12.1053 7.29151 12.2929C7.10403 12.4804 6.99871 12.7348 6.99871 13C6.99871 13.2652 7.10403 13.5196 7.29151 13.7071C7.47899 13.8946 7.73326 14 7.99839 14ZM7.99839 9.99999H8.99807C9.2632 9.99999 9.51747 9.89464 9.70495 9.7071C9.89242 9.51956 9.99775 9.26521 9.99775 8.99999C9.99775 8.73478 9.89242 8.48042 9.70495 8.29289C9.51747 8.10535 9.2632 7.99999 8.99807 8H7.99839C7.73326 7.99999 7.47899 8.10535 7.29151 8.29289C7.10403 8.48042 6.99871 8.73478 6.99871 8.99999C6.99871 9.26521 7.10403 9.51956 7.29151 9.7071C7.47899 9.89464 7.73326 9.99999 7.99839 9.99999ZM9.99775 16H7.99839C7.73326 16 7.47899 16.1053 7.29151 16.2929C7.10403 16.4804 6.99871 16.7348 6.99871 17C6.99871 17.2652 7.10403 17.5196 7.29151 17.7071C7.47899 17.8946 7.73326 18 7.99839 18H9.99775C10.2629 18 10.5171 17.8946 10.7046 17.7071C10.8921 17.5196 10.9974 17.2652 10.9974 17C10.9974 16.7348 10.8921 16.4804 10.7046 16.2929C10.5171 16.1053 10.2629 16 9.99775 16Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};
export const BellGrey: React.FC<IconType> = ({ width = '28', height = '21', color = '#373839' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.55884 3.92977C8.7339 2.69616 10.3311 2 12 2C13.6689 2 15.2661 2.69616 16.4412 3.92977C17.6157 5.16281 18.2727 6.83169 18.2727 8.56842C18.2727 11.7874 18.9287 13.7955 19.5396 14.9713C19.8461 15.5612 20.1454 15.9498 20.3551 16.1822C20.4602 16.2986 20.5434 16.3765 20.5945 16.4212C20.62 16.4436 20.6376 16.4577 20.6459 16.4642C20.648 16.4657 20.6494 16.4669 20.6503 16.4676C20.9413 16.6768 21.0684 17.0557 20.9637 17.4056C20.8581 17.7589 20.5409 18 20.1818 18H3.81824C3.45908 18 3.14192 17.7589 3.03626 17.4056C2.93163 17.0557 3.05869 16.6768 3.34965 16.4676C3.35056 16.4669 3.35204 16.4657 3.35408 16.4642C3.36239 16.4577 3.37997 16.4436 3.40553 16.4212C3.45664 16.3765 3.53981 16.2986 3.64488 16.1822C3.85461 15.9498 4.1539 15.5612 4.46037 14.9713C5.07127 13.7955 5.72732 11.7874 5.72732 8.56842C5.72732 6.83169 6.38433 5.16281 7.55884 3.92977ZM5.59242 16.3158H18.4076C18.3046 16.1483 18.2004 15.9652 18.0966 15.7655C17.3439 14.3168 16.6363 12.0301 16.6363 8.56842C16.6363 7.26773 16.144 6.02358 15.2727 5.10884C14.4019 4.19466 13.2243 3.68421 12 3.68421C10.7757 3.68421 9.5981 4.19466 8.72732 5.10884C7.85599 6.02358 7.36367 7.26773 7.36367 8.56842C7.36367 12.0301 6.65608 14.3168 5.90336 15.7655C5.79964 15.9652 5.69538 16.1483 5.59242 16.3158Z"
                    fill={color}
                    stroke={color}
                    stroke-width="0.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.42804 18.1012C7.83012 17.8863 8.33759 18.0249 8.5615 18.4109C8.91547 19.0211 9.42115 19.5236 10.0246 19.8712C10.6278 20.2186 11.3088 20.4001 12 20.4001C12.6912 20.4001 13.3722 20.2186 13.9754 19.8712C14.5788 19.5236 15.0845 19.0211 15.4385 18.4109C15.6624 18.0249 16.1699 17.8863 16.572 18.1012C16.974 18.3162 17.1185 18.8033 16.8946 19.1893C16.4017 20.039 15.6919 20.7483 14.8329 21.2431C13.9736 21.7381 12.9966 22 12 22C11.0034 22 10.0264 21.7381 9.16713 21.2431C8.30812 20.7483 7.5983 20.039 7.10542 19.1893C6.88152 18.8033 7.02596 18.3162 7.42804 18.1012Z"
                    fill={color}
                    stroke={color}
                />
            </g>
        </svg>
    );
};

export const QuestionCommentGrey: React.FC<IconType> = ({ width = '28', height = '21', color = '#373839' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
                <path
                    d="M16.1898 5.02105C16.445 5.15829 16.7471 5.19436 17.0303 5.12139C17.3134 5.04843 17.5546 4.87235 17.7012 4.63158C17.8226 4.4288 18.0115 4.26989 18.2384 4.17977C18.4654 4.08965 18.7175 4.07342 18.9552 4.13363C19.1929 4.19383 19.4028 4.32706 19.552 4.51243C19.7012 4.6978 19.7812 4.92482 19.7795 5.15789C19.7795 5.43707 19.6624 5.70481 19.454 5.90222C19.2455 6.09962 18.9629 6.21053 18.6681 6.21053C18.3734 6.21053 18.0907 6.32143 17.8823 6.51883C17.6739 6.71624 17.5568 6.98398 17.5568 7.26316C17.5568 7.54233 17.6739 7.81007 17.8823 8.00748C18.0907 8.20489 18.3734 8.31579 18.6681 8.31579C19.2533 8.31543 19.828 8.16922 20.3346 7.89183C20.8412 7.61444 21.2618 7.21565 21.5541 6.73553C21.8465 6.25541 22.0002 5.71087 22 5.15663C21.9998 4.60239 21.8455 4.05797 21.5528 3.57807C21.2601 3.09817 20.8391 2.6997 20.3323 2.4227C19.8255 2.14569 19.2506 1.99991 18.6654 2C18.0803 2.00009 17.5055 2.14605 16.9987 2.4232C16.492 2.70036 16.0712 3.09896 15.7786 3.57895C15.7051 3.69909 15.6575 3.83181 15.6384 3.96947C15.6193 4.10713 15.6291 4.24701 15.6674 4.38106C15.7056 4.5151 15.7714 4.64065 15.8611 4.75049C15.9508 4.86033 16.0625 4.95228 16.1898 5.02105ZM20.9686 12.5263C20.6769 12.4905 20.382 12.5656 20.1487 12.7353C19.9154 12.905 19.7626 13.1554 19.7239 13.4316C19.4907 15.216 18.5767 16.858 17.154 18.0484C15.7314 19.2388 13.8983 19.8955 12.0001 19.8947H5.78766L6.51003 19.2105C6.71702 19.0133 6.8332 18.7465 6.8332 18.4684C6.8332 18.1903 6.71702 17.9235 6.51003 17.7263C5.42642 16.6959 4.68897 15.3848 4.39058 13.9582C4.0922 12.5315 4.24622 11.0532 4.83324 9.70929C5.42026 8.36541 6.41403 7.21613 7.68938 6.4062C8.96472 5.59627 10.4646 5.16193 12.0001 5.15789C12.2948 5.15789 12.5775 5.04699 12.7859 4.84959C12.9943 4.65218 13.1114 4.38444 13.1114 4.10526C13.1114 3.82609 12.9943 3.55835 12.7859 3.36094C12.5775 3.16353 12.2948 3.05263 12.0001 3.05263C10.121 3.06006 8.28223 3.56867 6.69429 4.5202C5.10635 5.47174 3.83351 6.82771 3.0216 8.43276C2.20969 10.0378 1.89154 11.827 2.10361 13.5954C2.31568 15.3638 3.04938 17.0399 4.22067 18.4316L2.32027 20.2C2.16607 20.348 2.0616 20.536 2.02007 20.7402C1.97853 20.9444 2.00179 21.1557 2.08689 21.3474C2.17026 21.5396 2.31185 21.7042 2.4938 21.8203C2.67575 21.9364 2.88992 21.999 3.10933 22H12.0001C14.4355 22.0003 16.7874 21.159 18.6146 19.6338C20.4417 18.1086 21.6186 16.0043 21.9243 13.7158C21.9447 13.5782 21.936 13.4381 21.8989 13.3036C21.8618 13.1692 21.7969 13.0431 21.7081 12.9325C21.6192 12.8219 21.5081 12.7291 21.3812 12.6594C21.2543 12.5896 21.1141 12.5444 20.9686 12.5263ZM19.0904 9.4421C18.8881 9.35732 18.6637 9.33166 18.4458 9.36842L18.2458 9.43158L18.0458 9.52632L17.8791 9.66316C17.7791 9.76016 17.6998 9.87453 17.6457 10C17.58 10.1313 17.5494 10.2759 17.5568 10.4211C17.5535 10.5614 17.58 10.701 17.6346 10.8316C17.692 10.9579 17.7751 11.0724 17.8791 11.1684C17.9829 11.266 18.1061 11.3432 18.2415 11.3955C18.3769 11.4479 18.5219 11.4745 18.6681 11.4737C18.9629 11.4737 19.2455 11.3628 19.454 11.1654C19.6624 10.968 19.7795 10.7002 19.7795 10.4211C19.7832 10.283 19.7528 10.146 19.6905 10.0211C19.5711 9.76811 19.3575 9.56574 19.0904 9.45263V9.4421Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};
export const CalendarGrey: React.FC<IconType> = ({ width = '28', height = '21', color = '#373839' }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
                <path
                    d="M12 18.3636C12.178 18.3636 12.352 18.3103 12.5 18.2104C12.648 18.1105 12.7634 17.9686 12.8315 17.8024C12.8996 17.6363 12.9174 17.4535 12.8827 17.2772C12.848 17.1008 12.7623 16.9389 12.6364 16.8117C12.5105 16.6846 12.3502 16.598 12.1756 16.5629C12.001 16.5278 11.82 16.5458 11.6556 16.6147C11.4911 16.6835 11.3506 16.8 11.2517 16.9495C11.1528 17.099 11.1 17.2747 11.1 17.4545C11.1 17.6957 11.1948 17.9269 11.3636 18.0974C11.5324 18.2679 11.7613 18.3636 12 18.3636ZM16.5 18.3636C16.678 18.3636 16.852 18.3103 17 18.2104C17.148 18.1105 17.2634 17.9686 17.3315 17.8024C17.3996 17.6363 17.4174 17.4535 17.3827 17.2772C17.348 17.1008 17.2623 16.9389 17.1364 16.8117C17.0105 16.6846 16.8502 16.598 16.6756 16.5629C16.501 16.5278 16.32 16.5458 16.1556 16.6147C15.9911 16.6835 15.8506 16.8 15.7517 16.9495C15.6528 17.099 15.6 17.2747 15.6 17.4545C15.6 17.6957 15.6948 17.9269 15.8636 18.0974C16.0324 18.2679 16.2613 18.3636 16.5 18.3636ZM16.5 14.7273C16.678 14.7273 16.852 14.674 17 14.5741C17.148 14.4742 17.2634 14.3322 17.3315 14.1661C17.3996 14 17.4174 13.8172 17.3827 13.6408C17.348 13.4645 17.2623 13.3025 17.1364 13.1754C17.0105 13.0482 16.8502 12.9616 16.6756 12.9266C16.501 12.8915 16.32 12.9095 16.1556 12.9783C15.9911 13.0471 15.8506 13.1636 15.7517 13.3131C15.6528 13.4626 15.6 13.6384 15.6 13.8182C15.6 14.0593 15.6948 14.2905 15.8636 14.461C16.0324 14.6315 16.2613 14.7273 16.5 14.7273ZM12 14.7273C12.178 14.7273 12.352 14.674 12.5 14.5741C12.648 14.4742 12.7634 14.3322 12.8315 14.1661C12.8996 14 12.9174 13.8172 12.8827 13.6408C12.848 13.4645 12.7623 13.3025 12.6364 13.1754C12.5105 13.0482 12.3502 12.9616 12.1756 12.9266C12.001 12.8915 11.82 12.9095 11.6556 12.9783C11.4911 13.0471 11.3506 13.1636 11.2517 13.3131C11.1528 13.4626 11.1 13.6384 11.1 13.8182C11.1 14.0593 11.1948 14.2905 11.3636 14.461C11.5324 14.6315 11.7613 14.7273 12 14.7273ZM18.3 3.81818H17.4V2.90909C17.4 2.66799 17.3052 2.43675 17.1364 2.26627C16.9676 2.09578 16.7387 2 16.5 2C16.2613 2 16.0324 2.09578 15.8636 2.26627C15.6948 2.43675 15.6 2.66799 15.6 2.90909V3.81818H8.4V2.90909C8.4 2.66799 8.30518 2.43675 8.1364 2.26627C7.96761 2.09578 7.73869 2 7.5 2C7.2613 2 7.03239 2.09578 6.8636 2.26627C6.69482 2.43675 6.6 2.66799 6.6 2.90909V3.81818H5.7C4.98392 3.81818 4.29716 4.10552 3.79081 4.61698C3.28446 5.12844 3 5.82214 3 6.54545V19.2727C3 19.996 3.28446 20.6897 3.79081 21.2012C4.29716 21.7127 4.98392 22 5.7 22H18.3C19.0161 22 19.7028 21.7127 20.2092 21.2012C20.7155 20.6897 21 19.996 21 19.2727V6.54545C21 5.82214 20.7155 5.12844 20.2092 4.61698C19.7028 4.10552 19.0161 3.81818 18.3 3.81818ZM19.2 19.2727C19.2 19.5138 19.1052 19.7451 18.9364 19.9156C18.7676 20.086 18.5387 20.1818 18.3 20.1818H5.7C5.46131 20.1818 5.23239 20.086 5.0636 19.9156C4.89482 19.7451 4.8 19.5138 4.8 19.2727V11.0909H19.2V19.2727ZM19.2 9.27273H4.8V6.54545C4.8 6.30435 4.89482 6.07312 5.0636 5.90263C5.23239 5.73214 5.46131 5.63636 5.7 5.63636H6.6V6.54545C6.6 6.78656 6.69482 7.01779 6.8636 7.18828C7.03239 7.35877 7.2613 7.45455 7.5 7.45455C7.73869 7.45455 7.96761 7.35877 8.1364 7.18828C8.30518 7.01779 8.4 6.78656 8.4 6.54545V5.63636H15.6V6.54545C15.6 6.78656 15.6948 7.01779 15.8636 7.18828C16.0324 7.35877 16.2613 7.45455 16.5 7.45455C16.7387 7.45455 16.9676 7.35877 17.1364 7.18828C17.3052 7.01779 17.4 6.78656 17.4 6.54545V5.63636H18.3C18.5387 5.63636 18.7676 5.73214 18.9364 5.90263C19.1052 6.07312 19.2 6.30435 19.2 6.54545V9.27273ZM7.5 14.7273C7.678 14.7273 7.85201 14.674 8.00001 14.5741C8.14802 14.4742 8.26337 14.3322 8.33149 14.1661C8.39961 14 8.41743 13.8172 8.38271 13.6408C8.34798 13.4645 8.26226 13.3025 8.1364 13.1754C8.01053 13.0482 7.85016 12.9616 7.67558 12.9266C7.501 12.8915 7.32004 12.9095 7.15558 12.9783C6.99113 13.0471 6.85057 13.1636 6.75168 13.3131C6.65278 13.4626 6.6 13.6384 6.6 13.8182C6.6 14.0593 6.69482 14.2905 6.8636 14.461C7.03239 14.6315 7.2613 14.7273 7.5 14.7273ZM7.5 18.3636C7.678 18.3636 7.85201 18.3103 8.00001 18.2104C8.14802 18.1105 8.26337 17.9686 8.33149 17.8024C8.39961 17.6363 8.41743 17.4535 8.38271 17.2772C8.34798 17.1008 8.26226 16.9389 8.1364 16.8117C8.01053 16.6846 7.85016 16.598 7.67558 16.5629C7.501 16.5278 7.32004 16.5458 7.15558 16.6147C6.99113 16.6835 6.85057 16.8 6.75168 16.9495C6.65278 17.099 6.6 17.2747 6.6 17.4545C6.6 17.6957 6.69482 17.9269 6.8636 18.0974C7.03239 18.2679 7.2613 18.3636 7.5 18.3636Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};
