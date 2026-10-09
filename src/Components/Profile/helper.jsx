const formdetails = [
    { key: "name", label: "name", placeholder: "Enter your name 🙋‍♂️", type: "text" },
    { key: "email", label: "email", placeholder: "Enter your email 📩", type: "email" },
    { key: "DOB", label: "DOB", placeholder: "", type: "date" },
    { key: "phone", label: "phone", placeholder: "Enter your phone number 📱", type: "tel" },
    { key: "gender", label: "gender", placeholder: "male, female or transgender", type: "text" },
    { key: "teacherId", label: "teacherId", placeholder: "Enter your teacherId 📍", type: "text" },
];

const ProfileInput = ({ value = {}, setForm, edit }) => (
    <div className="grid grid-cols-2 gap-5">
        {formdetails.map((field) => (
            <div key={field.key} className="flex flex-col shrink-0">
                <label htmlFor={`profile-${field.key}`}>{field.label}</label>
                <input
                    id={`profile-${field.key}`}
                    value={value[field.key] ?? ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                    disabled={!edit}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="outline-none input w-full"
                />
            </div>
        ))}
    </div>
);

export { ProfileInput };
