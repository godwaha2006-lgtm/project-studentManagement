const SelectInput = ({ label, title, text1, text2, text3, text4, text5, setvalue, prev = {} }) => {
    const options = [text1, text2, text3, text4, text5].filter(Boolean);
    const value = prev?.[title] ?? "";

    return (
        <div className="text-black flex-1 flex flex-col w-full">
            <label htmlFor={title}>{label || title.replaceAll("_", " ")}</label>
            <select
                id={title}
                value={value}
                onChange={(e) => setvalue({ ...prev, [title]: e.target.value })}
                className="w-full border h-8 capitalize rounded bg-white"
            >
                <option value="" disabled>
                    Select {title.replaceAll("_", " ")}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
