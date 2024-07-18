export const Label = ({ htmlFor, children }: any) => {
    return (
        <label
            htmlFor={htmlFor}
            className="block text-sm font-medium leading-6 text-gray-900"
        >
            {children}
        </label>
    );
}