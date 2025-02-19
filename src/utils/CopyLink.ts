import React from 'react';

interface CopyLinkProps {
    ref: React.RefObject<HTMLInputElement>;
}

export const CopyLink = ({ ref }: CopyLinkProps) => {
    if (ref.current) {
        ref.current.select();
        document.execCommand('copy');
        console.log('Copied to clipboard!');
    } else {
        console.error('Input element not found');
    }
};
