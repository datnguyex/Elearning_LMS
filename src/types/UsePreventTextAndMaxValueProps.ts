export interface UsePreventTextAndMaxValueProps {
    maxValue: number;
    setState: (value: any) => void;
    setStateFake: (value: any) => void;
    event: React.ChangeEvent<HTMLInputElement>;
}
