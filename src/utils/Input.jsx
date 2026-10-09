const Input = ({ title, type = "text", placeholder, value = "", setvalue, prev = {}, disabled = false }) => {
    return (
        <div className="flex-1 flex flex-col pl-1">
            <label htmlFor={title}>{title.replaceAll("_", " ")}</label>
            <input
                id={title}
                type={type}
                value={value ?? ""}
                disabled={disabled}
                onChange={(e) => setvalue({ ...prev, [title]: e.target.value })}
                className="font-sans border p-1 rounded bg-white disabled:bg-gray-200"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
