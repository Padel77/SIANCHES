export const Checkbox = ({ id, checked, onCheckedChange }: any) => {
    return (
        <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange(e.target.checked)}
        />
    );
}