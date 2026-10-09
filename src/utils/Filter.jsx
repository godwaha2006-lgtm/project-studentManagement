const Filter = (data = [], { course = "All", search = "" } = {}) => {
    const query = search.trim().toLowerCase();

    return data.filter((student) => {
        const courseMatch = course === "All" || student.course === course;
        const searchMatch =
            !query ||
            [student.name, student.rollno, student.course, student.email]
                .filter(Boolean)
                .some((value) => String(value).toLowerCase().includes(query));

        return courseMatch && searchMatch;
    });
};

export default Filter;
